import { useEffect, useState } from "react";
import { useCounter } from "./use-Counter";

export const IncrementCounter = () => {

    const counter = useCounter(true);

    return (
        <>
        <p>Increment Counter</p>
        <h1>{counter}</h1>
        </>
    )
}