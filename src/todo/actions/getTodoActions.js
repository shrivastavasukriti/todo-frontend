import * as actionTypes from './actionTypes';
import { TodoApi } from '../../api/todoApi';
import todo from '../data/todoData';


// action creators

// get todos
const getTodos = () => {
    return {
        type: actionTypes.GET_TODO
    }
}
const getTodosSuccess = (todos) => {
    return {
        type: actionTypes.GET_TODO_SUCCESS,
        payload: todos
    }
}
const getTodosError = (error) => {
    return {
        type: actionTypes.GET_TODO_ERROR,
        payload: error
    }
}
const getTodo = () => {
    return new Promise((resolve) => {
        resolve(todo.data.todos)
    });
}
const getTodosRequest = () => {
    return (dispatch, getState) => {
        dispatch(getTodos());
        // return TodoApi.getTodo()
        return TodoApi.getTodo()
            .then(res => {
                console.log(res)
                dispatch(getTodosSuccess(res.data))
            })
            .catch(err => {
                dispatch(getTodosError(err));
            })
    }
}
export const setVisiblity = (visibleTask) => {
    return {
        type: 'SET_VISIBILTY',
        payload: visibleTask
    }
}
export function AddTodo(todo) {
    // const todo= { "id": "1", "name": "take kids to school", "desc":"take kids to school daily", "priority" : "HIGH", "todo_type": "Travel","start_date": "10-10-2020","end_date":"10-10-2020", "created_by" :"Sukriti","asignee":"Sukriti","archieved":false,"deleted":false }

    return (dispatch, getState) => {
        return TodoApi.createTodo(todo).then(res => {
            console.log(res);
            dispatch(getTodosRequest())
        })
    }
}

export function AddTodoSuccess() {
    return {
        type: actionTypes.ADD_TODO_SUCCESS
    }
}
export function UpdateTodo(todo) {
    return (dispatch, getState) => {
        dispatch({
            type: actionTypes.EDIT_TODO,
            payload:todo
        })
    return TodoApi.updateTodo(todo).then(res => {
            debugger;
            dispatch(getTodosRequest())
        })
    }
}
// export function UpdateTodoSuccess(todo) {
//     return {
//         type: actionTypes.EDIT_TODO_SUCCESS,
//         paylaod:todo,
//         _id: todo._id
//     }
// }

export default getTodosRequest;