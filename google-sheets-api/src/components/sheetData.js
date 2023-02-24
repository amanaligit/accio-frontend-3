import React from 'react'

function SheetData({ sheetData }) {
    // console.log(sheetData)
    return (
        <div className='col-6' >
            <h2 className='display-6'>Google Sheet Data:</h2>

            <table className='table'>
                <thead className='bg-primary text-light'>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Salary</th>
                        <th>Hobby</th>
                    </tr>
                </thead>
                <tbody className='bg-light border-0'>
                    {sheetData.map((record, i) =>
                        <tr key={i}>
                            <td>{record.name}</td>
                            <td>{record.age}</td>
                            <td>{record.salary}</td>
                            <td>{record.hobby}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default SheetData