export const ActionTypes = {
    TOGGLE_CATEGORY_DRAWER: 'TOGGLE_CATEGORY_DRAWER',
    ADD_TODO: 'ADD_TODO',
    DELETE_TODO: 'DELETE_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    ADD_CATEGORY: 'ADD_CATEGORY',
    DELETE_CATEGORY: 'DELETE_CATEGORY',
    SELECT_CATEGORY: 'SELECT_CATEGORY'
}

export const toggleCategoryDrawer = () => ({
    type: ActionTypes.TOGGLE_CATEGORY_DRAWER
});

export const addTodo = (todoName, categoryId) => ({
    type: ActionTypes.ADD_TODO,
    payload: {
        todoName,
        categoryId
    }
});

export const deleteTodo = (todoId) => ({
    type: ActionTypes.DELETE_TODO,
    payload: {
        todoId
    }
});

export const toggleTodo = (todoId) => ({
    type: ActionTypes.TOGGLE_TODO,
    payload: {
        todoId
    }
});

export const addCategory = (categoryName) => ({
    type: ActionTypes.ADD_CATEGORY,
    payload: {
        categoryName
    }
})

export const deleteCategory = (categoryId) => ({
    type: ActionTypes.DELETE_CATEGORY,
    payload: {
        categoryId
    }
});

export const selectCategory = (categoryId) => ({
    type: ActionTypes.SELECT_CATEGORY,
    payload: {
        categoryId
    }
});