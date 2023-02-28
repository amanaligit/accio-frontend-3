import React, { useContext, useEffect, useState } from 'react'
import { APIkey } from './weather-main';
import { ThemeContext } from '../App';

function WeatherData({ currentCity }) {
    // console.log(currentCity);
    const [weatherData, setWeatherData] = useState(null);
    const theme = useContext(ThemeContext);

    useEffect(() => {
        if (currentCity.lat !== '' && currentCity.lon !== '')
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${currentCity.lat}&lon=${currentCity.lon}&appid=${APIkey}`)
                .then(data => data.json())
                .then(jsonData => setWeatherData(jsonData));
    }, [currentCity])

    const listItemStyle = 'list-group-item ' + (theme ? 'bg-dark text-light' : '');

    return (
        <div>
            {weatherData &&
                <div className={'card my-5 ' + (theme ? 'bg-dark text-light' : '')}>

                    <div className='card-body'>
                        <img alt='weather desc img' className='card-img-top' src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} style={{ maxWidth: '100px', margin: 'auto', display: 'block' }} />
                        <h3 className='text-center card-title'>{currentCity.name || weatherData.name}</h3>
                        <h4 className='text-center card-title'>{weatherData.coord.lat}° N, {weatherData.coord.lon}° E</h4>
                        <h5 className='text-center card-title'>{weatherData.weather[0].description}</h5>
                    </div>
                    <ul className='list-group list-group-flush'>
                        <li className={listItemStyle}>Temp: {Math.floor((weatherData.main.temp - 273) * 100) / 100}&deg;C </li>
                        <li className={listItemStyle}>Max Temp: {Math.floor((weatherData.main.temp_max - 273) * 100) / 100}&deg;C </li>
                        <li className={listItemStyle}>Min Temp: {Math.floor((weatherData.main.temp_min - 273) * 100) / 100}&deg;C </li>

                    </ul>
                </div>
            }
        </div>
    )
}

export default WeatherData