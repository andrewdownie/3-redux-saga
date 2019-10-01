import {ActionTypes} from '../actions';
let nextTodoId = 0;

const todos = (state=[], action) => {
    switch(action.type){
        case ActionTypes.ADD_TODO:
            return [
                ...state,
                {
                    name: action.payload.todoName,
                    categoryId: action.payload.categoryId,
                    id: nextTodoId++,
                    completed: false
                }
            ];
        case ActionTypes.DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload.todoId);
        case ActionTypes.TOGGLE_TODO:
            return state.map(todo => {
                return (
                    todo.id === action.payload.todoId ? 
                    {...todo, completed: !todo.completed} :
                    todo
                )
            })
        default:
            return state;
    }
}

export default todos;