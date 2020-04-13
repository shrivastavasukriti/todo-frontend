import {HttpClient} from './httpClient' 

// This is the API. The backend root URL can be set from here.

const API = 'http://localhost:4000'

//Setting the todos URI

const TODO_API = `${API}/todos`

// The CRUD Operations of the Todo Resource.


//Create
const createTodo = todo => {
    return HttpClient.post(`${TODO_API}/add`, todo)
}

//Read
const getTodo = () => {
    return HttpClient.get(TODO_API)
}

//Update
const updateTodo = todo => {
    return HttpClient.post(`${TODO_API}/update/${todo._id}`, todo)
}

//Delete
const removeTodo = todo => {
    return HttpClient.delete(`${TODO_API}/${todo._id}`)
}


//Encapsulating in a JSON object

const TodoApi = {createTodo, getTodo, updateTodo, removeTodo}

export {TodoApi}