// value, onChange, reset
import { useState } from 'react';

export function useInput(value: string = '') {
  const [inputValue, setInputValue] = useState<string>(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }
  
  const reset = () => {
    setInputValue('');
  }

  return {
    value: inputValue,
    handleChange,
    reset,
  }
}