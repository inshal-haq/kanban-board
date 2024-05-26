import { useState } from "react";

export function useInput(
  initialValue: string,
  validationFn: (value: string) => boolean,
) {
  const [enteredValue, setEnteredValue] = useState(initialValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enteredValue);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  };

  const handleInputBlur = () => {
    setDidEdit(true);
  };

  const reset = () => {
    setEnteredValue(initialValue);
    setDidEdit(false);
  };

  return {
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid,
    reset,
  };
}
