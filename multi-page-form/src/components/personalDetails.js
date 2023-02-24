import React from 'react'
import { DatePicker, Select } from 'antd'
import countryList from '../country-list';
import PreviousButton from './previousButton';


function PersonalDetails({ setFormData, setPageNo, formData }) {
    const defaultOptions = countryList.map((ctr, i) => ({ label: ctr.name, value: ctr.name }));

    function onDateChange(date, dateString) {
        setFormData(oldData => ({ ...oldData, dob: dateString }));
    };

    function onCountryChange(countryName) {
        // const countryName = ;
        setFormData(oldData => ({ ...oldData, country: countryName }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        const firstname = e.target.firstname.value;
        const lastname = e.target.lastname.value;
        const address = e.target.address.value;

        if (firstname === '' || lastname === '' || address === '' || formData.country === '' || formData.dob === '') {
            alert('Please enter all details before clicking next')
        }
        else {
            setFormData(oldData => ({ ...oldData, firstname, lastname, address }))
            setPageNo(2)
        }


    }

    return (
        <div id='personal-details' className='container' style={{ maxWidth: '500px' }}>
            <h1 className='display-6 text-center'>Personal Details</h1>
            <form onSubmit={handleSubmit}>
                <div className='row mb-3'>
                    <div className='col-md-6'>
                        <label htmlFor='firstname' className='form-label'>First name</label>
                        <input type='text' className='form-control' id='firstname' defaultValue={formData.firstname} />
                    </div>
                    <div className='col-md-6'>
                        <label htmlFor='lastname' className='form-label'>Last Name</label>
                        <input type='text' className='form-control' id='lastname' defaultValue={formData.lastname} />
                    </div>
                </div>
                <div className='mb-3'>
                    <label htmlFor='dob' className='form-label'>Select Date of Birth</label>
                    <DatePicker id='dob' placeholder='select DOB' className='w-100' onChange={onDateChange} />
                </div>
                <div className='mb-3'>
                    <label htmlFor='address' className='form-label'>Address</label>
                    <input className='form-control' id='address' defaultValue={formData.address} />
                </div>
                <div className='mb-3'>
                    <label htmlFor='country' className='form-label'>Select Country</label>
                    <Select
                        id='country'
                        showSearch
                        style={{ width: "100%" }}
                        placeholder="Search to Select"
                        optionFilterProp="children"
                        filterOption={(input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())}
                        filterSort={(optionA, optionB) =>
                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        options={defaultOptions}
                        onChange={onCountryChange}
                        defaultValue={formData.country}
                    />
                </div>
                <PreviousButton setPageNo={setPageNo} />
                <button type='submit' className='btn btn-primary'>Next</button>
            </form>
        </div>
    )
}

export default PersonalDetails