import React, { useState, useEffect } from 'react';


const allowedChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '/', '*', '+', '-', '.']

function Calculator() {

    const initialHist = JSON.parse(localStorage.getItem('calculator-history')) || []

    const [input, setInput] = useState('')
    const [history, setHistory] = useState(initialHist);

    const onkeydown = (event) => {
        // console.log(event.key)
        if (allowedChars.includes(event.key)) {
            setInput(input + event.key)
        }
        else if (event.key === 'Enter') {
            calculateResult();
        }
        else if (event.key === 'Backspace') {
            // remove the last character
            // console.log(typeof input)
            setInput(input.toString().substring(0, input.length - 1))
        }
    }



    useEffect(() => {
        window.addEventListener('keydown', onkeydown)

        // defining a cleanup function
        // so that when the app reloads, the event listener is removed as well
        return () => window.removeEventListener('keydown', onkeydown)
    })

    function handleChange(event) {
        setInput(event.target.value)
        console.log(event.target.value)
    }

    function handleClick(event) {
        setInput(input + event.target.value)
    }

    function calculateResult() {
        const newHist = [input, ...history]
        setHistory(newHist)
        localStorage.setItem('calculator-history', JSON.stringify(newHist))
        const evaluatedResult = eval(input);
        // console.log(evaluatedResult);
        setInput(evaluatedResult)
    }

    function clearInput() {
        setInput("")
    }

    function handleHistoryClick(h) {
        setInput(h)
    }

    return (
        <div className='container' id='calculator'>
            <h1 className='display-1'>My Calculator</h1>
            {history.length ?
                <div>
                    <h2 className='display-6'>History</h2>
                    <ul className='list-group'>
                        {history.map((h, i) => (
                            <li key={i} className='list-group-item' onClick={() => handleHistoryClick(h)}>{h}</li>
                        ))}
                    </ul>
                </div>
                :
                null
            }
            <div className='d-flex mt-5'>
                <div className='col-6'>
                    <input type='text' className='form-control' value={input} onChange={handleChange} />
                </div>
                <button className='btn btn-primary col-3' onClick={calculateResult}>Calculate</button>
                <button className='btn btn-danger col-3' onClick={clearInput}>Clear</button>
            </div>
            <div id='calculator-body'>
                <div>
                    <button value='7' className='btn btn-secondary digit' onClick={handleClick}>7</button>
                    <button value='8' className='btn btn-secondary digit' onClick={handleClick}>8</button>
                    <button value='9' className='btn btn-secondary digit' onClick={handleClick}>9</button>
                    <button value='+' className='btn btn-dark' onClick={handleClick}>+</button>
                </div>
                <div>
                    <button value='4' className='btn btn-secondary digit' onClick={handleClick}>4</button>
                    <button value='5' className='btn btn-secondary digit' onClick={handleClick}>5</button>
                    <button value='6' className='btn btn-secondary digit' onClick={handleClick}>6</button>
                    <button value='-' className='btn btn-dark' onClick={handleClick}>-</button>
                </div>
                <div>
                    <button value='1' className='btn btn-secondary digit' onClick={handleClick}>1</button>
                    <button value='2' className='btn btn-secondary digit ' onClick={handleClick}>2</button>
                    <button value='3' className='btn btn-secondary digit' onClick={handleClick}>3</button>
                    <button value='*' className='btn btn-dark' onClick={handleClick}>*</button>
                </div>
                <div>
                    <button value='0' className='btn btn-secondary digit' onClick={handleClick}>0</button>
                    <button value='.' className='btn btn-dark' onClick={handleClick}>.</button>
                    <button value='/' className='btn btn-dark' onClick={handleClick}>/</button>
                    <button value='=' className='btn btn-dark' onClick={calculateResult}>=</button>
                </div>
            </div>
        </div>
    )

}

export default Calculator;