import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function SheetForm({ getSheetData }) {
    // console.log(getSheetData)

    function handleSubmit(event) {
        event.preventDefault()
        // console.log(event.target.elements.name.value)
        const name = event.target.elements.name.value;
        const age = event.target.elements.age.value;
        const salary = event.target.elements.salary.value;
        const hobby = event.target.elements.hobby.value;

        const dataToSend = { name: name, age: age, salary: salary, hobby: hobby }

        axios.post('https://sheet.best/api/sheets/f69efecb-b3f2-4cfd-865e-2141f1c43612', dataToSend)
            .then(res => {
                console.log(res);
                getSheetData();
            })

        event.target.elements.name.value = ""
        event.target.elements.age.value = ""
        event.target.elements.salary.value = ""
        event.target.elements.hobby.value = ""

    }

    return (
        <div className='col-md-6'>
            <h2 className='display-6'>Enter Details</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='name'>name</label>
                    <input type='text' id='name' className='form-control' />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='age'>age</label>
                    <input type='text' id='age' className='form-control' />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='salary'>salary</label>
                    <input type='text' id='salary' className='form-control' />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='hobby'>hobby</label>
                    <input type='text' id='hobby' className='form-control' />
                </div>
                <button type='submit' className='btn btn-primary w-100'>Submit</button>
            </form>
        </div>
    )

}

export default SheetForm