import React from 'react'
import { CheckOutlined } from '@ant-design/icons'


function SuccessPage() {
    return (
        <div className='container' style={{ maxWidth: '500px' }}>
            <h1 className='display-6 text-center'>Form submitted successfully</h1>
            <CheckOutlined style={{ width: '100%', fontSize: '200px', color: 'green' }} />
        </div>
    )
}

export default SuccessPage