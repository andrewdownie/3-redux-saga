import {combineReducers} from 'redux';
import selectedCategory from './selectedCategory';
import categories from './categories';
import layout from './layout';
import todos from './todos';

export default combineReducers({
    selectedCategory,
    categories,
    layout,
    todos
});