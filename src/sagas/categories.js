import {put, all, takeEvery} from 'redux-saga/effects';
import {ActionTypes, addCategoryComplete, loadCategoriesComplete} from '../actions';


export default function*() {
    yield all([
        allCategories(),
        addCategory()
    ]);
}

function* allCategories() {

    // read from localStorage instead of making an async request
    const categories = localStorage.getItem('categories');
    let json = JSON.parse(categories);

    if(json === null){
        localStorage.setItem('categories', "[]");
        json = [];
    }

    yield put(loadCategoriesComplete(json));

}

function* addCategory() {
    yield takeEvery(ActionTypes.ADD_CATEGORY, function*(action) {

        const newCategory = {
            name: action.payload.categoryName,
            id: Math.random()
        }

        // Update the local storage, instead of making an async request
        const categories = JSON.parse(localStorage.getItem('categories'));
        categories.push(newCategory);
        localStorage.setItem('categories', JSON.stringify(categories));

        yield put(addCategoryComplete(newCategory));
    });
}