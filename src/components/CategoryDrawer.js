import React from 'react';
import {Drawer} from '@material-ui/core';
import {withStyles} from '@material-ui/styles';
import {connect} from 'react-redux';

function CategoryDrawer (props){
    return (
        <Drawer
            open={props.open}
            variant="persistent"
            anchor="left"
            className={props.classes.CategoryDrawer}
            classes={{
                paper: props.classes.CategoryDrawerPaper
            }}
        >
            {props.children}
        </Drawer>
    );
}

const mapStateToProps = state => ({
    shiftAmount: state.layout.CategoryDrawer.width,
    open: state.layout.CategoryDrawer.open
});

const styles = theme => {
    const width = props => props.shiftAmount;

    return {
        CategoryDrawer: {
            width
        },
        CategoryDrawerPaper: {
            width
        }
    }
}

export default connect(mapStateToProps)(withStyles(styles)(CategoryDrawer));