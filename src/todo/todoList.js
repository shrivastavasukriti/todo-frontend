import React from 'react'
import { Link } from 'react-router-dom'

function todoList({ todos, setId }) {
    let renderElement = todos.map(todo => {
        return (<div key={todo._id} className="card w-100 text-left" style={{ border: 'transparent' }}>
            <div className="card-header" id="headingOne">

                <p>
                    <span className="form-check-inline" >
                        <input className="form-check-input position-static" type="checkbox" id={todo.id} value={todo.id} aria-label="..." onChange={(e) => { e.persist(); console.log(e.target.value) }} />
                    </span>

                    <span className="task" style={{ fontSize: "20px" }} data-toggle="collapse" data-target={`#collapse${todo.id}`} aria-expanded="true" aria-controls={`collapse${todo.id}`} > {todo.name}</span>{/* <span data-toggle="collapse" data-target={`#collapse${todo.id}`} aria-expanded="true" aria-controls={`collapse${todo.id}`} className="task mt-4"></span> */}
                    <span className="time ml-2">({todo.todo_type})</span>
                    <span className="time ml-2">{todo.start_date} - {todo.end_date}</span>
                    <span className="float-right">30min</span>
                </p>

            </div>

            <div id={`collapse${todo.id}`} className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body" style={{ border: '1px solid', borderColor: '#d6cfcf', borderRadius: '5px', padding: '5px' }}>

                    <ul className="list-group list-group-flush" style={{ padding: '5px' }}>
                        <li className="list-group-item" style={{ padding: '3px' }}>Label: {todo.todo_type}</li>
                        <li className="list-group-item" style={{ padding: '3px' }}>Status: {todo.archieved}</li>
                        <li className="list-group-item" style={{ padding: '3px' }}>Due Date: {todo.end_date}</li>
                        <li className="list-group-item" style={{ padding: '3px' }}>

                            <button type="button" className="btn btn-sm btn-dark float-right" data-toggle="modal" data-target="#exampleModal" style={{ margin: '10px' }} onClick={() => setId(todo.id)}>
                                <i className="fas fa-trash-alt"></i> Delete
                     </button>
                            <Link to={`/edit/${todo._id}`}> <button type="button" className="btn btn-sm btn-dark float-right" style={{ margin: '10px' }}><i className="fas fa-pen"></i> Edit </button>
                            </Link>

                        </li>
                    </ul>

                </div>
            </div>

        </div>)
    })
    return renderElement;
}

export default todoList
