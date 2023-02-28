import React from 'react'

function UserDetails({ setFormData, setPageNo, formData }) {

    function handleSubmit(e) {
        e.preventDefault();
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmpassword = e.target.confirmpassword.value;
        const newData = { username, email, password, confirmpassword };

        if (password !== confirmpassword) {
            alert('password and confirm password do not match!')
        }
        else {
            setFormData(oldData => ({ ...oldData, ...newData }))
            setPageNo(1)
        }
    }

    return (
        <div id='user-details' className='container' style={{ maxWidth: '500px' }}>
            <h1 className='display-6 text-center '>Account Details</h1>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='username'>Username</label>
                    <input className='form-control' id='username' defaultValue={formData.username} />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='email'>email</label>
                    <input className='form-control' type='email' id='email' defaultValue={formData.email} />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='password'>password</label>
                    <input className='form-control' type='password' id='password' defaultValue={formData.password} />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='confirmpassword'>confirm password</label>
                    <input className='form-control' type='password' id='confirmpassword' defaultValue={formData.confirmpassword} />
                </div>
                <button type='submit' className='btn btn-primary'>Next</button>

            </form>
        </div>
    )
}

export default UserDetails