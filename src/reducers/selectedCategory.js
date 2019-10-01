import {ActionTypes} from '../actions';

const selectedCategory = (state=0, action) => {
    switch(action.type) {
        case ActionTypes.SELECT_CATEGORY:
            return action.payload.categoryId;
        default:
            return state;
    }
}

export default selectedCategory;