// value, onChange, reset
import { useState } from 'react';

interface IUseInput {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
}

export function useInput({value, onChange}: IUseInput) {
  const [inputValue, setInputValue] = useState<string>(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  return {
    value: inputValue,
    handleChange,
  }
}