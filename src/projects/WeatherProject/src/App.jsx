import { useState } from 'react'
import SearchBar from './components/SearchBar.jsx'
import DisplayData from './components/DisplayData.jsx'
import HistoryData from './components/HistoryData.jsx'
import { fetchDataApi } from './services/FetchDataAPI.jsx'
import './styles/App.css'

export default function App() {
  const [weatherData, setWeatherData] = useState('')
  const [history, setHistory] = useState ([])

  //funkcije
  const searchData = async(cityname) => {
    const data = await fetchDataApi(cityName);
    if(data){
      setWeatherData(data)
      setHistory((prevHistory) => [cityName, ...prevHistory.slice(0, 4)]);
    }
  }

  const onHistoryItemClick = (cityName) => {
    searchData(cityName);
  }

  return (
    <div className="App">
      <SearchBar onSearch={searchData} />
      <DisplayData weatherData={weatherData} />
      <HistoryData history={HistoryData} onHistoryItemClick={onHistoryItemClick} />
    </div>
  )
}
