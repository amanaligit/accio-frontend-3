import React, { useState, useEffect } from 'react'

const deadline = 'January, 1, ' + (new Date().getFullYear() + 1);

function Timer() {

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    function updateTime() {

        const newYearDate = Date.parse(deadline);

        // time till new year in milliseconds:
        const remainingTime = newYearDate - Date.now();

        setDays(Math.floor((remainingTime / 1000 / 60 / 60 / 24)))
        setHours(Math.floor((remainingTime / 1000 / 60 / 60) % 24))
        setMinutes(Math.floor((remainingTime / 1000 / 60) % 60))
        setSeconds(Math.floor((remainingTime / 1000) % 60))


        // console.log(newYearDate);
    }

    useEffect(() => {
        const interval = setInterval(updateTime, 1000);

        // return a cleanup function from the useEffect that clears the intervals
        return () => clearInterval(interval);
    })



    return (
        <div className='timer'>
            <h1>Happy New Year In</h1>
            <div className='col-4'>
                <div className='box'>
                    <p id='day'>{days}</p>
                    <span className='text'>Days</span>
                </div>
            </div>
            <div className='col-4'>
                <div className='box'>
                    <p id='hour'>{hours}</p>
                    <span className='text'>hours</span>
                </div>
            </div>
            <div className='col-4'>
                <div className='box'>
                    <p id='minute'>{minutes}</p>
                    <span className='text'>minutes</span>
                </div>
            </div>
            <div className='col-4'>
                <div className='box'>
                    <p id='second'>{seconds}</p>
                    <span className='text'>seconds</span>
                </div>
            </div>
        </div>
    )
}

export default Timer