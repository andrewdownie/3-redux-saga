import React from 'react';
import {Typography, List, ListItem, ListItemText, ListItemIcon, IconButton} from '@material-ui/core';
import {connect} from 'react-redux';
import {toggleTodo, deleteTodo} from '../actions';

function TodoList(props) {

    return (
        <List>
            {RenderTodos(props, false, 'In Progress')}
            {RenderTodos(props, true, 'Completed')}
        </List>
    );
}

function RenderTodos(props, completed, title) {
    const filteredTodos = FilterTodos(props.todos, props.selectedCategory, completed);

    if(filteredTodos.length === 0) {
        return <></>;
    }

    return (
        <>
            <Typography variant="h5">{title}</Typography>
            {
                filteredTodos.map(todo => {
                    return (
                        <ListItem
                            button
                            key={todo.id}
                            onClick={() => props.toggleTodo(todo.id)}
                        >
                            <ListItemText>
                                {todo.name}
                            </ListItemText>
                            <ListItemIcon
                                onClick={
                                    e => {
                                        e.stopPropagation();
                                        props.deleteTodo(todo.id);
                                    }
                                }
                            >
                                <IconButton>
                                    X
                                </IconButton>
                            </ListItemIcon>
                        </ListItem>
                    )
                })
            }
        </>
    );

}

function FilterTodos(todos, categoryId, completed) {
    return todos.filter(todo => {
        return (
            todo.categoryId === categoryId
        )
    }).filter(todo => {
        return (
            todo.completed === completed
        )
    })
}

const mapStateToProps = state => ({
    todos: state.todos,
    selectedCategory: state.selectedCategory
});

const mapDispatchToProps = dispatch => ({
    toggleTodo: (todoId) => dispatch(toggleTodo(todoId)),
    deleteTodo: (todoId) => dispatch(deleteTodo(todoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);