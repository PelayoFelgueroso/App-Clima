import React, { useEffect, useState } from "react";
import { useSearchContext } from "./context/SearchContext";

const API_KEY = "7cc3619217c21407aae0f9da1261c75c"

interface WeatherResponse {
    coord: {
      lon: number;
      lat: number;
    };
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    base: string;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
      sea_level?: number;
      grnd_level?: number;
    };
    visibility: number;
    wind: {
      speed: number;
      deg: number;
      gust?: number;
    };
    clouds: {
      all: number;
    };
    dt: number;
    sys: {
      type?: number;
      id?: number;
      country: string;
      sunrise: number;
      sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

export const ResultadoClima: React.FC = () => {
    const { searchValue } = useSearchContext();
    const [results, setResults] = useState<WeatherResponse | null>(null);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${API_KEY}&units=metric`

    useEffect(() => {
        if (searchValue) {
            const fetchData = async () => {
                try {
                    const response = await fetch(url);
                    const data = await response.json();
                    setResults(data)
                } catch (error) {
                    console.error("Error al obtener resultados", error);
                }
            }

            fetchData();
        }
    }, [searchValue, url])

    return (
        <>
            {results && <div className="results-container">
                <img src={`https://openweathermap.org/img/wn/${results.weather[0].icon}@2x.png`} alt={results.weather[0].description} />
                <p>{results.main.temp}°C</p>
                <p>{results.weather[0].main}</p>
                <p style={{textTransform: "capitalize"}}>{searchValue}</p>
            </div>}
        </>
    )
}
