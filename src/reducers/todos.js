import {ActionTypes} from '../actions';

const todos = (state=[], action) => {
    switch(action.type){
        case ActionTypes.LOAD_TODOS_COMPLETE:
            return action.payload.todos;
        case ActionTypes.ADD_TODO_COMPLETE:
            return [
                ...state,
                {
                    name: action.payload.todoName,
                    categoryId: action.payload.categoryId,
                    id: action.payload.todoId,
                    completed: action.payload.completed 
                }
            ];
        case ActionTypes.DELETE_TODO_COMPLETE:
            return state.filter(todo => todo.id !== action.payload.todoId);
        case ActionTypes.TOGGLE_TODO_COMPLETE:
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