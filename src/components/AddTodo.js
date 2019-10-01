import React, {useState} from 'react';
import {Button, TextField} from '@material-ui/core';
import {addTodo} from '../actions';
import {connect} from 'react-redux';


function AddTodo(props) {

    const [name, setName] = useState('');

    return (
        <div>
            <Button
                onClick={() => {
                    if(name.length > 0){
                        props.addTodo(name, props.selectedCategory);
                        setName('');
                    }
                }}
            >
                Add Todo
            </Button>
            <TextField value={name} onChange={e => setName(e.target.value)}/>
        </div>
    );
}

const mapStateToProps = state => ({
    selectedCategory: state.selectedCategory
});

const mapDispatchToProps = dispatch => ({
    addTodo: (todoName, categoryId) => dispatch(addTodo(todoName, categoryId))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);