import axios from "axios";

const apiKey = 'd1c324ebf13fef88b21ef4dc09370b64'; // My API key
const baseURL = 'https://api.openweathermap.org/data/2.5/weather'; // URL from where we get data

export const fetchDataApi = async (cityName) => {
    try{
        const response = await axios.get(baseURL, {
            params: {
                q: cityName,
                appid: apiKey,
                units: 'metric',
            },
        });
        return response.data;
    }
    catch (error) {
        console.error('Error while fetching data:', error)
        return null;
    }
}