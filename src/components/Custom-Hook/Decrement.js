import { useEffect, useState } from "react";
import { useCounter } from "./use-Counter";

export const DecrementCounter = () => {

    const counter = useCounter();

    return (
        <>
        <p>Decrement Counter</p>
        <h1>{counter}</h1>
        </>
    )
}