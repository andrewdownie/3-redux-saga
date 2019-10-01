import React, {useState} from 'react';
import {Button, TextField} from '@material-ui/core';
import {connect} from 'react-redux';
import {addCategory} from '../actions';

function AddCategory(props) {
    const [name, setName] = useState('');

    return (
        <div>
            <Button
                onClick={() => {
                    if(name.length > 0){
                        props.addCategory(name);
                        setName('');
                    }
                }}
            >
                Add Category
            </Button>
            <TextField value={name} onChange={e => setName(e.target.value)}/>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addCategory: (categoryName) => dispatch(addCategory(categoryName))
});

export default connect(null, mapDispatchToProps)(AddCategory);