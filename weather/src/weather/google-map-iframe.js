import React, { useContext, useState } from 'react'
import { ThemeContext } from '../App';

const MapAPIKey = 'AIzaSyDZOj-BNc1O3rbkEqY8Hm2jnDTIGewiyLg'

function GoogleMapIframe({ currentCity }) {
    const [mapType, setMapType] = useState('place')
    const [satelliteView, setSatelliteView] = useState(false);
    const theme = useContext(ThemeContext);
    console.log(mapType)
    return (
        <div>
            <div className='mb-3'>
                <h2 className='display-6'>Map preferences:</h2>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={() => setMapType('place')} checked={mapType === 'place'} />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Place
                    </label>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" disabled={mapType === 'streetview'} checked={satelliteView} onChange={() => setSatelliteView(s => !s)} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Satellite View</label>
                    </div>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={() => setMapType('streetview')} checked={mapType === 'streetview'} />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Street View
                    </label>
                </div>
            </div>

            {mapType === 'place' ?

                <iframe
                    style={{ height: '500px', width: '100%', filter: theme ? 'invert(90%)' : '' }}
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google map iframe"
                    src={`https://www.google.com/maps/embed/v1/place?key=${MapAPIKey}&q=${currentCity.lat},${currentCity.lon}&maptype=${satelliteView ? 'satellite' : 'roadmap'}`}
                    allowFullScreen>
                </iframe>
                :
                <iframe
                    style={{ height: '500px', width: '100%' }}
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google map iframe"
                    src={`https://www.google.com/maps/embed/v1/streetview?key=${MapAPIKey}&location=${currentCity.lat},${currentCity.lon}&heading=210&pitch=10&fov=35`}
                    allowFullScreen>
                </iframe>

            }

        </div>
    )
}

export default GoogleMapIframe