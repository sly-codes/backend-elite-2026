/**
 * Custom hook for localStorage with hydration protection.
 * Prevents hydration mismatches in Next.js by only accessing localStorage on the client side.
 */
'use client';

import { useState, useEffect, useCallback } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [isHydrated, setIsHydrated] = useState(false);

  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        
        if (typeof window !== 'undefined') {
          let serializedValue: string;
          if (valueToStore instanceof Set) {
            serializedValue = JSON.stringify(Array.from(valueToStore));
          } else if (valueToStore instanceof Map) {
            serializedValue = JSON.stringify(Array.from(valueToStore.entries()));
          } else {
            serializedValue = JSON.stringify(valueToStore);
          }
          window.localStorage.setItem(key, serializedValue);
        }
      } catch (error) {
        console.error(`Error saving to localStorage key "${key}":`, error);
      }
    },
    [key, storedValue]
  );

  useEffect(() => {
    try {
      if (typeof window === 'undefined') {
        return;
      }

      const item = window.localStorage.getItem(key);
      
      if (item) {
        try {
          const parsed = JSON.parse(item);
          let parsedValue: T;
          if (initialValue instanceof Set) {
            parsedValue = new Set(parsed) as T;
          } else if (initialValue instanceof Map) {
            parsedValue = new Map(parsed) as T;
          } else {
            parsedValue = parsed as T;
          }
          setStoredValue(parsedValue);
        } catch (parseError) {
          console.error(`Error parsing localStorage value for key "${key}":`, parseError);
        }
      }
    } catch (error) {
      console.error(`Error loading from localStorage key "${key}":`, error);
    } finally {
      setIsHydrated(true);
    }
  }, [key, initialValue]);

  return [isHydrated ? storedValue : initialValue, setValue];
}

/**
 * useRoadmapPersistence - Manages completed concept state with localStorage persistence.
 * Tracks which concepts are completed across all phases.
 * Uses localStorage key: 'roadmap-v1-states'
 */
export function useRoadmapPersistence() {
  const [completedSet, setCompletedSet] = useLocalStorage<Set<string>>('roadmap-v1-states', new Set());

  const toggleConcept = useCallback(
    (conceptId: string) => {
      setCompletedSet((prev) => {
        const next = new Set(prev);
        if (next.has(conceptId)) {
          next.delete(conceptId);
        } else {
          next.add(conceptId);
        }
        return next;
      });
    },
    [setCompletedSet]
  );

  const isCompleted = useCallback(
    (conceptId: string) => {
      return completedSet instanceof Set ? completedSet.has(conceptId) : false;
    },
    [completedSet]
  );

  /**
   * Calculate progress for a specific phase
   * Formula: (Completed concepts in Phase X / Total concepts in Phase X) * 100
   */
  const getPhaseProgress = useCallback(
    (phaseConcepts: string[]) => {
      if (!(completedSet instanceof Set)) {
        return { progress: 0, completedCount: 0, totalCount: phaseConcepts.length };
      }
      if (phaseConcepts.length === 0) {
        return { progress: 0, completedCount: 0, totalCount: 0 };
      }
      
      const completedCount = phaseConcepts.filter((id) => completedSet.has(id)).length;
      const progress = (completedCount / phaseConcepts.length) * 100;
      
      return { progress, completedCount, totalCount: phaseConcepts.length };
    },
    [completedSet]
  );

  /**
   * Calculate overall progress across all phases
   * Formula: (Total completed concepts / Total roadmap concepts) * 100
   */
  const getGlobalProgress = useCallback(
    (allConceptIds: string[]) => {
      if (!(completedSet instanceof Set)) return 0;
      if (allConceptIds.length === 0) return 0;
      
      const completedCount = allConceptIds.filter((id) => completedSet.has(id)).length;
      return (completedCount / allConceptIds.length) * 100;
    },
    [completedSet]
  );

  return {
    completedSet,
    toggleConcept,
    isCompleted,
    getPhaseProgress,
    getGlobalProgress,
  };
}