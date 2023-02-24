import React from 'react'
import PreviousButton from './previousButton'
import { Descriptions } from 'antd'

function ConfirmationPage({ setPageNo, formData }) {
    console.log(setPageNo)
    return (
        <div className='container' style={{ maxWidth: '1000px' }}>
            <h1 className='display-6 text-center'>Confirmation Page</h1>
            <Descriptions title="Please Verify the following detals:">
                {
                    Object.keys(formData).map((key) => <Descriptions.Item label={key}>{formData[key]}</Descriptions.Item>)
                }
            </Descriptions>
            <PreviousButton setPageNo={setPageNo} />
            <button className='btn btn-success' onClick={() => setPageNo(3)}>Confirm</button>
        </div>
    )
}

export default ConfirmationPage