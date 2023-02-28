import React, { useContext, useState } from 'react'
import { ConfigProvider, Select, theme } from 'antd'
import { APIkey } from './weather-main';
import { ThemeContext } from '../App';

function CitySearch({ setCurrentCity }) {

    const [options, setOptions] = useState([]);
    const appTheme = useContext(ThemeContext);

    function onCityChange(loc) {
        // console.log(JSON.parse(loc));
        setCurrentCity(JSON.parse(loc));
    }

    // This function is triggered when the user types:
    function onCitySearch(value) {
        // console.log('searched!')
        if (value) {
            // console.log('fetching', value)
            fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${APIkey}`)
                .then(data => data.json())
                .then(jsonData => {
                    // setOptions(jsonData)
                    // console.log(jsonData)
                    const newOptions = jsonData.map((location, i) => ({ value: JSON.stringify(location), label: `${location.name},${location.country},${location.state}` }))
                    // setJsonOptions(jsonData);
                    setOptions(newOptions);
                })
        }
    }

    const { defaultAlgorithm, darkAlgorithm } = theme;

    return (
        <div>
            <ConfigProvider theme={{ algorithm: (appTheme ? darkAlgorithm : defaultAlgorithm) }}>
                <Select
                    id='country'
                    showSearch
                    style={{ width: "100%" }}
                    placeholder="Select City"
                    optionFilterProp="children"
                    filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
                    options={options}
                    onChange={onCityChange}
                    onSearch={onCitySearch}
                />
            </ConfigProvider>
        </div>
    )
}

export default CitySearch