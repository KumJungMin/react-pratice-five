import { useState, useCallback } from "react";

function useInput(initialInput: any) {
  const [input, setInput] = useState(initialInput);

  // onChange는 useCallback으로 감싸서,
  // input이 변경될 때마다 함수가 새로 생성되는 것을 방지한다.
  const onChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      const { name, value } = e.currentTarget;
      setInput((input: any) => ({ ...input, [name]: value }));
    },
    [input]
  );

  return [input, onChange];
}

export { useInput };
