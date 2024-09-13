import React, { useState } from 'react'

export default function SearchBar ({ onSearch }) {
    const [cityInput, setCityInput] = useState('')

    const handleInputChange = (e) => {
        setCityInput(e.target.value);
    }

    const handleFormsuBmit = (e) => {
        e.preventDefault();
        if (cityInput){
            onSearch(cityInput)
            setCityInput('')
        }
    }

    return (
        <div className="search-bar">
            <form onSubmit={handleFormsuBmit}>
                <input
                    type='text'
                    value={cityInput}
                    onChange={handleInputChange}
                    placeholder='Enter city name'
                />
                <button type='submit'>Search</button>
            </form>
        </div>
    )
}