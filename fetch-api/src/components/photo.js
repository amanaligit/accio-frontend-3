import React from 'react'

function Photo({ photoData }) {
    return (
        <div key={photoData.id} className='card m-5'>
            <img src={photoData.url} alt={photoData.title} className='card-img-top' />
            <div className='card-body'>
                <p className='card-text display-6'>{photoData.title}</p>
            </div>
        </div>

    )
}

export default Photo