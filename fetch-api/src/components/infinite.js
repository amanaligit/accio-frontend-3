import React, { useState, useEffect } from 'react';
import Photo from './photo';

// the number of photos to load when the user reached the end
const numberOfNewPhotos = 5;


function Infinite() {

    const [pageData, setPageData] = useState([]);
    const [dataLength, setDataLength] = useState(0);

    function addMorePhotos() {
        setDataLength(d => d + numberOfNewPhotos);
    }

    function runOnScroll() {
        // console.log('user scrolled!')
        // check if user has reached the end
        console.log(document.documentElement.scrollHeight, window.scrollY, window.innerHeight);
        if (document.documentElement.scrollHeight <= window.scrollY + window.innerHeight) {
            console.log('user reached the end!')
            addMorePhotos();
        }
    }

    useEffect(() => {
        console.log(dataLength)
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(data => data.json())
            .then(jsonData => {
                const newPageData = jsonData.slice(0, dataLength);
                setPageData(newPageData)
            })
    }, [dataLength])

    useEffect(() => {
        addMorePhotos();
        window.addEventListener('scroll', runOnScroll)
        return () => window.removeEventListener('scroll', runOnScroll)
    }, [])

    return (
        <div className='container' style={{ maxWidth: '500px' }} >
            <h1 className='display-3 text-center'>Infinite Scrolling Example</h1>
            {
                pageData.map(photoData => <Photo key={photoData.id} photoData={photoData} />)
            }
        </div>
    )
}

export default Infinite;