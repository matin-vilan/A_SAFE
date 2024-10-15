import { useState, useEffect } from "react";

/**
 * A custom hook that debounces a value.
 * @param value The value to be debounced.
 * @param delay The debounce delay in milliseconds.
 * @returns The debounced value.
 */
const useDebounce = (value?: string, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
