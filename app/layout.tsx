import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Backend Elite 2026 - Java Backend Roadmap',
  description: 'Complete Java Backend Development Roadmap Tracker for 2026',
  icons: {
    icon: '/spring.svg',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
