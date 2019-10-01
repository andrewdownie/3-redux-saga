import React from 'react';
import {AppBar, Toolbar, Button} from '@material-ui/core';
import {connect} from 'react-redux';
import {toggleCategoryDrawer} from '../actions';
import {withStyles} from '@material-ui/styles';
import classNames from 'classnames';

function TitleBar(props) {

    const baseClass = props.classes.TitleBar;
    const shiftClass = props.classes.ShiftTitleBar;
    const applyShift = props.applyShift;

    return (
        <AppBar
            className={classNames(baseClass, {[shiftClass]: applyShift})}
        >
            <Toolbar>
                <Button
                    onClick={props.toggleCategoryDrawer}
                >
                    CATEGORIES
                </Button>
            </Toolbar>
        </AppBar>
    );
}

const mapStateToProps = state => ({
    shiftAmount: state.layout.CategoryDrawer.width,
    applyShift: state.layout.CategoryDrawer.open
})

const mapDispatchToProps = dispatch => ({
    toggleCategoryDrawer: () => dispatch(toggleCategoryDrawer())
})

const styles = theme => {
    const shiftMargin = props => props.shiftAmount;
    const shiftWidth = props => `calc(100% - ${props.shiftAmount}px)`;

    return {
        TitleBar: {

        },
        ShiftTitleBar: {
            marginLeft: shiftMargin,
            width: shiftWidth
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TitleBar));