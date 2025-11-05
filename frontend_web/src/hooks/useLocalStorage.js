/**
 * PUBLIC_INTERFACE
 * useLocalStorage
 * A simple hook to sync state to localStorage with JSON serialization.
 */
import { useEffect, useState } from "react";

// PUBLIC_INTERFACE
export function useLocalStorage(key, initialValue) {
  /** Persist a state value to localStorage and keep it in sync. */
  const [value, setValue] = useState(() => {
    try {
      const raw = window.localStorage.getItem(key);
      return raw != null ? JSON.parse(raw) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* ignore quota errors */
    }
  }, [key, value]);

  return [value, setValue];
}
