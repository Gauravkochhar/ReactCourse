import { useEffect, useState } from "react";

export const useCounter = (isIncrement = false) => {
    
    const [ counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevValue) => {
                const newValue = isIncrement ? (prevValue + 1): (prevValue - 1);
                return newValue;
            })
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])
    return counter;
}