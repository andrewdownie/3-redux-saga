import {ActionTypes} from '../actions';
import {produce} from 'immer';

const layout = (state=initialLayout, action) => {
    return produce(state, newState => {
        switch(action.type) {
            case ActionTypes.TOGGLE_CATEGORY_DRAWER:
                newState.CategoryDrawer.open = !state.CategoryDrawer.open;
                break;
            default:
                // if we don't change newState, immer will return existing for us
                // so we don't need to return anything when using immer.produce
        }
    });
}

const initialLayout = {
    CategoryDrawer: {
        width: 300,
        open: true
    },
    MainArea: {
        marginTop: 80
    }
}

export default layout;