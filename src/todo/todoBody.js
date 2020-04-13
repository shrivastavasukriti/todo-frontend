import React from 'react'
import Modal from './modal'
import TodoList from './todoList';
import {Link} from 'react-router-dom'


function TodoBody({ id, todos, setId }) {
    return (
        <div className="card-body">
            <p className="heading1">
                <span className="today">Today</span>
                <span className="float-right headingright">7h 15min</span>
            </p>
            <div id="accordion">
                <TodoList todos={todos} setId={setId} />
                <Modal id={id} title={'to be changed'} />
            </div>

        </div>
    )
}

export default TodoBody
