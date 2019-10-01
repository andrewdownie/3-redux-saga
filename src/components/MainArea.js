import React from 'react';
import {withStyles} from '@material-ui/styles';
import {connect} from 'react-redux';
import classNames from 'classnames';

function MainArea(props) {

    const baseClass = props.classes.MainArea; // Styles we create in the material ui higher order function class creator will be availble in the classes element of props.
    const shiftClass = props.classes.MainAreaShift;
    const applyShift = props.applyShift;

    return (
        <main
            className={classNames(baseClass, {[shiftClass]: applyShift})}
            // classNames lets us apply many classes, and optionally apply classes to a react element
            // I have no idea why, but the format for optionally applying classes is to encase it in an object,
            // and then encase the optinally applied class in sqaure brackes, and have a boolean as a key for whether
            // that class should be applied. {[optionalClass]: booleanToApplyClass}
        >
            {props.children}
        </main>
    );
}

const mapStateToProps = state => ({
    marginTop: state.layout.MainArea.marginTop,
    shiftAmount: state.layout.CategoryDrawer.width,
    applyShift: state.layout.CategoryDrawer.open
})

const styles = theme => { // This is the material ui higher order function class creator
    const marginTop = props => props.marginTop; // This function will be called by material-ui. React props will be available in the first paramter of a function within material ui higher order function. We can then pull out the props that we want.
    const shiftMargin = props => props.shiftAmount;
    const shiftWidth = props => `calc(100% - ${props.shiftAmount}px)`;

    return {
        MainArea: {
            marginTop
        },
        MainAreaShift: {
            width: shiftWidth,
            marginLeft: shiftMargin
        }
    }
}

export default connect(mapStateToProps)(withStyles(styles)(MainArea)); // Connecting to redux before using withStyles, means that redux state we map, will be accessible by material ui.