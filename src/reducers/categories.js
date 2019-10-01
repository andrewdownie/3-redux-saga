import {ActionTypes} from '../actions';
let nextCategoryId = 0;

const categories = (state=[], action) => {
    switch(action.type) {
        case ActionTypes.ADD_CATEGORY:
            return [
                ...state,
                {name: action.payload.categoryName, id: nextCategoryId++}
            ]
        case ActionTypes.DELETE_CATEGORY:
            return state.filter(category => category.id !== action.payload.categoryId)
        default:
            return state;
    }
}

export default categories;