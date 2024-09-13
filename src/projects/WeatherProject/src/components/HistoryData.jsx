import React from 'react'

export default function HistoryData({ history, onHistoryItemClick }) {
    return (
        <div className="search-history">
            <h2>Last 5 searches:</h2>
            <ul>
                {history.map((cityName, index) => (
                    <li key={index} onClick={() => onHistoryItemClick(cityName)}>
                        {cityName}
                    </li>
                ))}
            </ul>
        </div>
    )
}