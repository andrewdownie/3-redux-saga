import {put, all, takeEvery} from 'redux-saga/effects';
import {ActionTypes, deleteCategoryComplete, addCategoryComplete, loadCategoriesComplete, selectCategory} from '../actions';


export default function*() {
    yield all([
        allCategories(),
        addCategory(),
        deleteCategory()
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

    const firstCategoryId = json.length > 0 ? json[0].id : 0;

    yield put(loadCategoriesComplete(json));
    yield put(selectCategory(firstCategoryId));
}

function* addCategory() {
    yield takeEvery(ActionTypes.ADD_CATEGORY, function*(action) {

        const newCategory = {
            name: action.payload.categoryName,
            id: Math.random()
        }

        // For the purpose of not further complicating this tutorial, update the local storage, instead of making an async request
        const categories = JSON.parse(localStorage.getItem('categories'));
        categories.push(newCategory);
        localStorage.setItem('categories', JSON.stringify(categories));

        yield put(addCategoryComplete(newCategory));
    });
}

function* deleteCategory() {
    yield(takeEvery(ActionTypes.DELETE_CATEGORY, function*(action){
        const targetId = action.payload.categoryId;

        // For the purpose of not further complicating this tutorial, delete from local storage, instead of making an async request
        const categories = JSON.parse(localStorage.getItem('categories'));
        const filteredCategories = categories.filter(category => 
            category.id !== targetId
        );
        localStorage.setItem('categories', JSON.stringify(filteredCategories));


        yield put(deleteCategoryComplete(targetId));

    }));
}