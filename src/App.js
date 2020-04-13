import React, { Component } from 'react';

import AddTodo from './todo/addTodo'
import Todos from './todo/todos'
import Archive from './todo/archive'
import EditTodo from './todo/editTodo'
import TodoHeader from './todo/todoHeader'

import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"


import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="page">
          {/* <!--Card--> */}
          <div className="card text-left h-100">
            {/* <!--Card Header--> */}
         
            <Router>
            <div className="card-header">
            <TodoHeader />
              
            </div>
              <Switch>
                <Route path='/' exact component={Todos} />
                <Route path='/add' exact component={AddTodo} />
                <Route path='/archive' exact component={Todos} />
                <Route path='/edit/:id' exact component={EditTodo} />
              </Switch>
              <Redirect to='/' />
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
