import { useState, useEffect } from "react";

async function getWeather(lon, lat, setIsLoadingFn, setDataFn) {
    setIsLoadingFn(true);

    const url =
        "/integration/weather?" +
        new URLSearchParams({
            lon,
            lat,
        });

    const response = await fetch(url, {
        method: "get",
    });

    if (!response.ok) {
        // todo: error states
        setIsLoadingFn(false);
        return;
    }

    const { data } = await response.json();

    setIsLoadingFn(false);
    setDataFn(data);
}

export default function useGetWeather(lon, lat) {
    const [isLoading, setIsLoading] = useState(null);
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        getWeather(lon, lat, setIsLoading, setWeatherData).catch(console.error);

        return () => {
            // todo: cleanup?
        };
    }, [lon, lat, setIsLoading, setWeatherData]);

    return {
        isLoading,
        weatherData,
    };
}
