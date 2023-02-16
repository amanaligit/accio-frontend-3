import React, { useState } from 'react'

function ToDoList() {

    // let todoInitalValue = JSON.parse(localStorage.getItem('mytodos'))
    // if (todoInitalValue === null) {
    //     todoInitalValue = [];
    // }

    const todoInitalValue = JSON.parse(localStorage.getItem('mytodos')) || []


    const [todos, setTodos] = useState(todoInitalValue);

    const handleSubmit = (e) => {
        // We want to prevent the default action because
        // submit's default action is to reload the page
        e.preventDefault();
        const newTodo = { text: e.target.elements.todo.value, done: false, editing: false };

        // first copy the old todos, then add the new todo at the end
        const updatedTodos = [...todos, newTodo];
        setTodos(updatedTodos);
        e.target.elements.todo.value = "";

        localStorage.setItem('mytodos', JSON.stringify(updatedTodos));

    }

    const handleDelete = (index) => {
        console.log(`delete ${index}`)

        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
        localStorage.setItem('mytodos', JSON.stringify(updatedTodos));


    }

    const handleDone = (index) => {
        console.log(`done ${index}`)

        const updatedTodos = [...todos];
        updatedTodos[index].done = !updatedTodos[index].done;
        setTodos(updatedTodos);
        localStorage.setItem('mytodos', JSON.stringify(updatedTodos));
    }

    const handleEditButtonClick = (index) => {

        const updatedTodos = [...todos];
        updatedTodos[index].editing = !updatedTodos[index].editing;
        setTodos(updatedTodos);
        localStorage.setItem('mytodos', JSON.stringify(updatedTodos));
    }

    const handleEdit = (index, event) => {

        const updatedTodos = [...todos];
        updatedTodos[index].text = event.target.value;
        setTodos(updatedTodos);
        localStorage.setItem('mytodos', JSON.stringify(updatedTodos));
    }

    return (
        <div className='container'>
            <h1 className='display-1 text-center'>To-do List</h1>
            <form className='mb-4 row' onSubmit={handleSubmit}>
                <div className='col-md-8'>
                    <input type='text' placeholder='Enter to-do text' name='todo' className='form-control' />
                </div>
                <button type='submit' className='btn btn-primary col-md-4  '>Add Todo</button>
            </form>
            <div>
                <h2 className='display-6'>Current Todos:</h2>
                {
                    todos.length ?


                        <ul className='list-group'>
                            {
                                todos.map((todo, i) =>
                                    <li key={i} className='list-group-item'>
                                        {todo.editing ?
                                            <input className='form-control' value={todo.text} onChange={(event) => handleEdit(i, event)} />
                                            :
                                            <div style={{ float: 'left', textDecoration: todo.done ? 'line-through' : 'none', fontSize: '1.5rem', fontFamily: 'cursive' }}>
                                                {todo.text}
                                            </div>
                                        }

                                        <button className={'btn m-2 ' + (todo.done ? 'btn-secondary' : 'btn-success')} style={{ float: 'right' }} onClick={() => handleDone(i)}>{todo.done ? 'Undo' : 'Done'}</button>
                                        <button className='btn m-2 btn-danger' style={{ float: 'right' }} onClick={() => handleDelete(i)}>Delete</button>
                                        <button className='btn m-2 btn-secondary' style={{ float: 'right' }} onClick={() => handleEditButtonClick(i)}>Edit</button>
                                    </li>)
                            }
                        </ul>
                        :
                        <h1 className='display-6 text-center mt-5'>No todos to display...</h1>
                }

            </div>
        </div >
    )
}

export default ToDoList