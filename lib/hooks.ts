/**
 * Custom hook for localStorage with hydration protection.
 * Prevents hydration mismatches in Next.js by only accessing localStorage on the client side.
 *
 * @template T - The type of value stored in localStorage
 * @param key - The localStorage key
 * @param initialValue - The initial value to use before hydration or if key doesn't exist
 * @returns A tuple with the stored value and a setter function
 *
 * @example
 * ```tsx
 * const [completed, setCompleted] = useLocalStorage<Set<string>>('concepts', new Set());
 * ```
 */
'use client';

import { useState, useEffect, useCallback } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
  // State to store our value
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  // Track if we've hydrated from localStorage
  const [isHydrated, setIsHydrated] = useState(false);

  // Return a wrapped version of useState's setter function that
  // persists the new value to localStorage.
  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      try {
        // Allow value to be a function so we have the same API as useState
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        
        // Save state
        setStoredValue(valueToStore);
        
        // Save to local storage only on client
        if (typeof window !== 'undefined') {
          // Handle Set and Map types by converting to JSON-serializable format
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
        // A more advanced implementation would handle the error case
        console.error(`Error saving to localStorage key "${key}":`, error);
      }
    },
    [key, storedValue]
  );

  // Load from localStorage only on client side after mount
  useEffect(() => {
    try {
      if (typeof window === 'undefined') {
        return;
      }

      const item = window.localStorage.getItem(key);
      
      if (item) {
        let parsedValue: T;
        try {
          const parsed = JSON.parse(item);
          // Check if we're restoring a Set or Map based on initialValue type
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

  // Return initialValue until hydrated to prevent hydration mismatch
  return [isHydrated ? storedValue : initialValue, setValue];
}

/**
 * Hook to manage completed concepts across all phases.
 * Provides a centralized way to track progress.
 */
export function useCompletedConcepts() {
  const [completedSet, setCompletedSet] = useLocalStorage<Set<string>>('completed-concepts', new Set());

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

  const getProgress = useCallback(
    (totalConcepts: number) => {
      if (!(completedSet instanceof Set)) return 0;
      if (totalConcepts === 0) return 0;
      return (completedSet.size / totalConcepts) * 100;
    },
    [completedSet]
  );

  return {
    completedSet,
    toggleConcept,
    isCompleted,
    getProgress,
  };
}
