import * as actionTypes from '../actions/actionTypes'

const initialState = {
    isLoading: false,
    visibleTasks: 'SHOW_ACTIVE',
    todos: [],
    error: ''
}
const todoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_TODO: {
            return {
                ...state,
                isLoading: true
            }
        }
        
        case actionTypes.GET_TODO_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                todos: action.payload,
                error: ''
            }
        }
        case actionTypes.GET_TODO_ERROR: {
            return {
                ...state,
                isLoading: false,
                todos: [],
                error: action.payload
            }
        }
        case actionTypes.EDIT_TODO:
        {
            return {
                ...state,
                editing: false,
                updating: true
            }
        }

    // case actionTypes.UPDATE_TODO_SUCCESS:
    //     {
    //         return {
    //             ...state,
    //             ...action.payload,
    //             updating: false
    //         }
    //     }

    // case actionTypes.DELETE_TODO:
    //     {
    //         return {
    //             ...state,
    //             deleting: true
    //         }
    //     }

        case actionTypes.ADD_TODO_SUCCESS: {
            return [
                ...state
                // ,
                // action.todo
            ];
    }
        case actionTypes.SET_VISIBILTY:{
            return {
                ...state,
                visibleTasks: action.payload
            }
        }

        default: return state;
    }
} 

export default todoListReducer;