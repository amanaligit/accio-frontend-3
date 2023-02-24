import React, { useEffect, useState } from 'react';
import PaginationList from './pagination-list';
import Photo from './photo';

const pageLengh = 10;
const totalPhotos = 150;
const totalNoOfPages = totalPhotos / pageLengh;
const pageNoArray = new Array(totalNoOfPages).fill(0);


function Pagination() {

    const [pageData, setPageData] = useState([]);
    const [pageNo, setPageNo] = useState(0);

    // console.log(pageNo)

    useEffect(() => {
        // console.log('running fetch')
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(data => data.json())
            .then(jsonData => {
                // console.log(jsonData);
                // newPageData will only contain the photos to be rendered on the current page
                const newPageData = jsonData.slice(pageNo * pageLengh, pageLengh * (pageNo + 1));
                setPageData(newPageData);
            })
    }, [pageNo])

    return (
        <div>
            <h1 className='display-1'>Pagiation Example</h1>
            <PaginationList setPageNo={setPageNo} pageNo={pageNo} />

            <div className='container' style={{ maxWidth: '500px' }}>
                {pageData.map((photoData) => <Photo key={photoData.id} photoData={photoData} />)}
            </div>




        </div>
    )
}

export default Pagination;
export { pageNoArray, totalNoOfPages };