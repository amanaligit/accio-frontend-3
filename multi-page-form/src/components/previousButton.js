import React from 'react'

function PreviousButton({ setPageNo }) {

    return (
        <button className='btn btn-danger mx-2' onClick={() => setPageNo(p => p - 1)}>Previous</button>
    )
}

export default PreviousButton