import { useState } from "react";

export function useInput(
  initialValue: string,
  validationFn: (value: string) => boolean,
) {
  const [enteredValue, setEnteredValue] = useState(initialValue);
  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enteredValue);

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  return {
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
    hasError: didEdit && !valueIsValid,
  };
}
