import React from 'react'

export default function DisplayData({ weatherData }) {
    if(!weatherData) return <div>No data to display</div>

    return (
        <div className="weather-dispaly">
            <h2>Weather data for city: {weatherData.name}</h2>
            <p>Temperature: {weatherData.main.temp} °C</p>
            <p>Feels like: {weatherData.main.feels_like} °C</p>
            <p>Min. Temp: {weatherData.main.temp_min} °C</p>
            <p>Max. Temp: {weatherData.main.temp_max} °C</p>
            <p>Humidity: {weatherData.main.humitdy} %</p>
        </div>
    )
}