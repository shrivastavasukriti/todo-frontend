import React from 'react'
import { trackPromise } from 'react-promise-tracker';
import { connect } from 'react-redux';
import { AddTodo } from './actions/getTodoActions'
import _ from 'lodash';

class addTodo extends React.Component {
    todo = {};
    addTodos = (e) => {
        e.preventDefault();
        this.todo.id= _.uniqueId();
        this.props.addTodos(this.todo).then(()=> {
            this.props.history.push('/')
        });
    }
    resetTodos = () => {
     this.todo={}
    }
    cancelAdding = () => {
        this.props.history.push('/')
       }
    handleChange = (field, value) => {
        this.todo[field] = value;
    }
    render() {
        return (
            <div className="page">
                <div class="card w-75 text-left" >
                    {/*  style={{ border: '5px solid black'}}*/}
                    {/* <img class="card-img-top" src="/images/inner1.png" alt="Card image cap"  height='100px'/> */}
                    <form style={{ margin: '5%' }} >
                        <div class="form-group">
                            <label for="exampleFormControlInput1" >Title</label>
                            <input type="text" style={{ width: '80%' }} value={this.todo.name} onChange={(e) => this.handleChange('name', e.target.value)} class="form-control" id="exampleFormControlInput1" placeholder="Add the title..." required />
                            <div class="invalid-feedback">
                                Please provide a Title.
                            </div>
                        </div>
                        <div class="form-group" >
                            <label for="exampleFormControlTextarea1" >Description</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" value={this.todo.desc} onChange={(e) => this.handleChange('desc', e.target.value)} style={{ width: '80%' }} rows="3" placeholder="Add the description..." required></textarea>
                            <div class="invalid-feedback">
                                Please provide a Description.
                            </div>
                        </div>
                        <div class="form-group" >
                            <label className="radioLabel" for="exampleFormControlTextarea1" >Status</label>
                            <div className="radio" style={{ width: '80%' }}  onChange={(e) => this.handleChange('status', e.target.value)} >
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input" value="New" />
                                    <label style={{ width: '20%' }} class="custom-control-label" for="customRadioInline1" >New</label>
                                </div>
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input" value="Progress"/>
                                    <label class="custom-control-label" for="customRadioInline2" style={{ width: '30%' }} >In Progress</label>
                                </div>
                                <div class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" id="customRadioInline3" name="customRadioInline1" class="custom-control-input" value="Completed"/>
                                    <label class="custom-control-label" for="customRadioInline3" style={{ width: '30%' }} >Completed</label>
                                </div>
                            </div>
                        </div>
                        <div class="form-group" >
                            <label for="exampleFormControlSelect1" >Label</label>
                            <select class="form-control" id="exampleFormControlSelect1" style={{ width: '80%' }} required value={this.todo.todo_type} onChange={(e) => this.handleChange('todo_type', e.target.value)}>
                                <option>Personal</option>
                                <option>Work</option>
                                <option>Shopping</option>
                                <option>Others</option>
                            </select>
                            <div class="invalid-feedback">
                                Please provide a Label.
                            </div>
                        </div>
                        <div class="form-group" >
                            <label for="exampleFormControlInput2" >Start Date</label>
                            <input type="date"
                                style={{ width: '80%' }}
                                class="form-control"
                                id="exampleFormControlInput2"
                                value={this.todo.start_date}
                                onChange={(e) => this.handleChange('start_date', e.target.value)}
                                required />
                            <div class="invalid-feedback">
                                Please provide a Start Date.
                            </div>
                        </div>
                        <div class="form-group" >
                            <label for="exampleFormControlInput3" >Due Date</label>
                            <input type="date"
                                style={{ width: '80%' }}
                                class="form-control"
                                id="exampleFormControlInput3"
                                value={this.todo.end_date}
                                onChange={(e) => this.handleChange('end_date', e.target.value)}
                                required />
                            <div class="invalid-feedback">
                                Please provide a Due Date.
                            </div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <button type="submit" class="btn mr-2" onClick={this.addTodos} >Add Todo</button>
                            <button type="button" class="btn mr-2" onClick={this.resetTodos}>Reset</button>
                            <button type="cancel" class="btn btnMargin" onClick={this.cancelAdding}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodos: (todo) => dispatch(AddTodo(todo))
    }
}

export default connect(null, mapDispatchToProps)(addTodo)
