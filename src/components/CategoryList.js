import React from 'react';
import {List, ListItem, ListItemText, ListItemIcon, IconButton} from '@material-ui/core';
import {connect} from 'react-redux';
import {deleteCategory, selectCategory} from '../actions';

function CategoryList(props) {

    return (
        <List>
            {
                props.categories.map(category => {
                    return (
                        <ListItem
                            key={category.id}
                            button
                            onClick={() => props.selectCategory(category.id)}
                            disabled={props.selectedCategory === category.id}
                        >
                            <ListItemText>
                                {category.name}
                            </ListItemText>
                            <ListItemIcon
                                onClick={
                                    e=> {
                                        e.stopPropagation();
                                        props.deleteCategory(category.id);
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
        </List>
    );
}

const mapStateToProps = state => ({
    categories: state.categories,
    selectedCategory: state.selectedCategory
});

const mapDispatchToProps = dispatch => ({
    selectCategory: (categoryId) => dispatch(selectCategory(categoryId)),
    deleteCategory: (categoryId) => dispatch(deleteCategory(categoryId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);