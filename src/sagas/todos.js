import {put, all, takeEvery} from 'redux-saga/effects';
import {ActionTypes, addTodoComplete, loadTodosComplete, toggleTodoComplete} from '../actions';

export default function*() {
    yield all([
        loadTodos(),
        addTodo(),
        deleteTodo(),
        toggleTodo()
    ]);
}

function* loadTodos (){
    const todos = localStorage.getItem('todos');
    let json = JSON.parse(todos);

    if(json === null){
        localStorage.setItem('todos', "[]");
        json = [];
    }

    yield put(loadTodosComplete(json));
    
}

function* toggleTodo() {

    yield takeEvery(ActionTypes.TOGGLE_TODO, function*(action){

        const targetId = action.payload.todoId;

        const todos = JSON.parse(localStorage.getItem('todos'));
        const mappedTodos = todos.map(todo => {
            return (
                todo.id === targetId ?
                {...todo, completed: !todo.completed} :
                todo
            )
        });
        localStorage.setItem('todos', JSON.stringify(mappedTodos));

        yield put(toggleTodoComplete(targetId));

    });

};

function* addTodo() {
    yield takeEvery(ActionTypes.ADD_TODO, function*(action) {
        const todo = {
            id: Math.random(),
            name: action.payload.todoName,
            categoryId: action.payload.categoryId,
            completed: false
        }

        const todos = JSON.parse(localStorage.getItem('todos'));
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));

        yield put(addTodoComplete(todo));
    });
}

function* deleteTodo() {
    yield takeEvery(ActionTypes.DELETE_TODO, function*(action) {
        const targetId = action.payload.todoId;

        const todos = JSON.parse(localStorage.getItem('todos'));
        const filteredTodos = todos.filter(todo => 
            todo.id === targetId
        );
        localStorage.setItem('todos', JSON.stringify(filteredTodos));

        yield put(addTodoComplete(targetId));
    });
}