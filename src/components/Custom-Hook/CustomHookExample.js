import { useEffect, useState } from "react"
import useHttp from "./use-http";

export const CustomHookExample = () => {
    const httpData = useHttp({ url: 'https://swapi.dev/api/films', method: 'GET'}, fetchData)
    const { isLoading, error, sendRequest: fetchFilms } = httpData;

    function fetchData(data) {
        console.log('Response from Custom Hook:', data)
    }

    useEffect(() => {
        console.log('Calling :fetchData ')
        fetchFilms();
    }, []);

    return <><p>Custom Hook Example </p>
    isLoading: {isLoading ? 'true': 'false' }<br/>
    error: {error}
    </>
}