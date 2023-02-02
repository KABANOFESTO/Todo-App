import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { AiFillCloseCircle } from 'react-icons/ai';
import { AiOutlineEdit } from 'react-icons/ai';

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });
    console.log('hereeeeeeeeeeeeeeeeee', todos)
    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }
    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }
    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.Text}
            </div>
            <div className='icons'>
                <AiFillCloseCircle
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon'
                />
                <AiOutlineEdit
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                    className='edit-icon'
                />

            </div>
        </div>

    ));
}

export default Todo;
