// value, onChange, reset
import { useState } from 'react';

interface IUseInput {
  value: string;
  submitAction?: (value: string) => void;
}

export function useInput({value, submitAction}: IUseInput) {
  const [inputValue, setInputValue] = useState<string>(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputValue('');
    submitAction && submitAction(inputValue);
  }

  return {
    value: inputValue,
    handleChange,
    handleSubmit,
  }
}