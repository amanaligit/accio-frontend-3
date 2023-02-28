import React, { useEffect } from 'react'
import { useState } from 'react'
import CitySearch from './city-search';
import WeatherData from './weather-data';
import { Spin } from 'antd';
import GoogleMapMain from './google-map-main';


const APIkey = '1f656eb8806bc3accc47448bd0a3598a'

function WeatherMain() {

    const [currentCity, setCurrentCity] = useState({ lat: '', lon: '' });
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if (navigator.geolocation) {
            setLoading(true)
            const GeoLocation = navigator.geolocation;
            GeoLocation.getCurrentPosition((loc) => {
                setLoading(false);
                setCurrentCity({ lat: loc.coords.latitude, lon: loc.coords.longitude })
            })
        }
        else {

        }
    }, [])


    return (
        <div>

            <div className='container'>
                {/* <form >
                <div className='mb-3'>
                    <label className='form-label'>Enter Latitude</label>
                    <input className='form-control' value={currentCity.lat} onChange={(e) => setCurrentCity(c => ({ ...c, lat: e.target.value }))}></input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Enter Longitude</label>
                    <input className='form-control' value={currentCity.lon} onChange={(e) => setCurrentCity(c => ({ ...c, lon: e.target.value }))}></input>
                </div>
            </form> */}
                {
                    loading ?
                        <Spin tip="Loading" size="large" className='my-5'>
                            <div className="content" />
                        </Spin>
                        :
                        <>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <h1 className='display-2 text-center'>Weather</h1>
                                    <CitySearch setCurrentCity={setCurrentCity} />
                                    <WeatherData currentCity={currentCity} />
                                </div>
                                <div className='col-md-6'>
                                    <GoogleMapMain currentCity={currentCity} />
                                </div>
                            </div>
                        </>
                }

            </div>
        </div>

    )
}
export default WeatherMain
export { APIkey }
