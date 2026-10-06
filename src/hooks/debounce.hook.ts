import { useEffect, useState } from "react";

export const useDebouncesearch = <T>(value: T, delay: number = 500) => {
  const [debounceValue, setDebouncevalue] = useState(value);
  useEffect(() => {
   const time = setTimeout(() => setDebouncevalue(value), delay);
   return ()=> clearTimeout(time)
  }, [value, delay]);
  return debounceValue;
};
