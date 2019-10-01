import {all} from 'redux-saga/effects';
import categories from './categories';
import todos from './todos';

export default function*() {
    yield all([
        categories(),
        todos()
    ]);
}