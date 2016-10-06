import { take, put } from 'redux-saga/effects';
import {
    REQUEST_HELP,
    RECEIVE_HELP
} from 'reducers/help';
import { help } from 'api';

export default function* flow () {
    while (true) {
        yield take([REQUEST_HELP]);
        yield put(help.request());
        yield take([RECEIVE_HELP]);
    }
}
