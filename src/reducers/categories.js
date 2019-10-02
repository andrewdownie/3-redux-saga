import {ActionTypes} from '../actions';

const categories = (state=[], action) => {
    switch(action.type) {
        case ActionTypes.ADD_CATEGORY_COMPLETE:
            return [
                ...state,
                action.payload.category
            ]
        case ActionTypes.DELETE_CATEGORY_COMPLETE:
            return state.filter(category => category.id !== action.payload.categoryId)
        case ActionTypes.LOAD_CATEGORIES_COMPLETE:
            return action.payload.categories;
        default:
            return state;
    }
}

export default categories;