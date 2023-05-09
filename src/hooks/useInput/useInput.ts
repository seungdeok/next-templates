import { useCallback, useState } from 'react';

type ReturnType = [
  string,
  (event: React.ChangeEvent<HTMLInputElement>) => void,
  (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
];

export const useInput = (initialValue: string): ReturnType => {
  const [text, setText] = useState<string>(initialValue);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setText(value);
  }, []);

  const reset = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      setText(initialValue);
    },
    [initialValue],
  );

  return [text, onChange, reset];
};
