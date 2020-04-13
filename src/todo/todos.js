import React, { Component, Fragment } from 'react'
import './todo.css';
import TodoBody from './todoBody';
import NewUser from './newUser';
import {Link} from 'react-router-dom'


import { connect } from 'react-redux';


export class todos extends Component {

    render() {
        return (

            <Fragment>
                {/* <!--Card Body--> */}
                {this.props.todos && this.props.todos.length === 0 ? <NewUser /> : <TodoBody id={1} todos={this.props.todos} setId={() => { console.log() }} />}
                <div className="card-footer text-muted">
                < p>
                    <span><i className="fa fa-plus mr-1 icon" aria-hidden="true"></i>Move to Completed</span>
                  <Link to='/add'>  <span className="float-right">
                        <i className="fa fa-plus mr-1 icon-green" aria-hidden="true"></i> Add Task for Today</span></Link>
                </p>
            </div>
            </Fragment>
        )
    }

}
const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed)
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed)
    }
  }

const mapStateToProps = state => {
console.log(state.todos)
    return {
        isLoading: state.isLoading,
        todos: state.todos,
        // todos: getVisibleTodos(state.todos, state.visibleTasks),
        error: state.error
    }
}


export default connect(mapStateToProps)(todos)
