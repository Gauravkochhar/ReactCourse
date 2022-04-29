import { useState } from "react";

const useInput = (validateFn) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);
    const isValueValid = validateFn(enteredValue);
    const hasError = !isValueValid && isTouched;

    const valueChangeHandler = (e) => {
        setEnteredValue(e.target.value);
    }

    const inputBlurHandler = (e) => {
        setIsTouched(true);
    }
    return {
        enteredValue,
        hasError,
        isTouched,
        valueChangeHandler,
        inputBlurHandler
    };
}

export default useInput;