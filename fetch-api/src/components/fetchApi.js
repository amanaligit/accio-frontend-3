import React, { useEffect, useState } from 'react'

function FetchApi() {

    const [apiData, setApiData] = useState([]);

    // implement the loading text feature while the data of API is being loaded
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(data => data.json())
                .then(jsonData => {
                    // console.log(jsonData)
                    setApiData(jsonData)
                    setLoading(false)
                })
        }, 3000)

    }, [])

    return (
        <div>

            <h1 className='display-1 text-center'>Fetch API Data</h1>
            {loading ?
                <h2 className='display-6 text-center'>Loading...</h2>
                :
                <div >
                    {apiData.map((userData) => (
                        <div key={userData.id} style={{ border: '5px solid black', margin: '10px' }}>
                            <h2><b>Name:</b>{userData.name}</h2>
                            <h2><b>Email:</b>{userData.email}</h2>
                            <h2><b>Website:</b>
                                <a href={'http://www.' + userData.website}>{userData.website}</a>
                            </h2>

                        </div>
                    ))}
                </div>
            }
        </div>

    )
}

export default FetchApi