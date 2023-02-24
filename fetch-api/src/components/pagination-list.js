import React from 'react'
import { pageNoArray, totalNoOfPages } from './pagination'

function PaginationList({ pageNo, setPageNo }) {
    return (
        <ul className='pagination'>
            <div className='mx-auto d-flex'>

                <li className={'page-item ' + (pageNo === 0 ? 'disabled' : '')}>
                    <button className='page-link' onClick={() => setPageNo(p => p - 1)}>Prev</button>
                </li>
                {pageNoArray.map((ignore, i) =>
                    <li className='page-item' key={i}>
                        <button className={'page-link ' + (i === pageNo ? 'active' : '')} onClick={() => setPageNo(i)}>{i + 1}</button>
                    </li>
                )
                }
                <li className={'page-item ' + (pageNo === totalNoOfPages - 1 ? 'disabled' : '')}>
                    <button className='page-link' onClick={() => setPageNo(p => p + 1)}>Next</button>
                </li>

            </div>
        </ul>
    )
}

export default PaginationList