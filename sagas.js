import { delay } from 'redux-saga';
import { put, takeEvery, all } from "redux-saga/effects"

function* helloSaga(){
    console.log("Hello Sagas!");
}

function* incrementAsync(){
    console.log("hello");
    yield delay(1000)
    yield put({type:'INCREMENT'})
}

function* watchIncrementAsync(){
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}


function* decrementAsync(){
    console.log("hello");
    yield delay(1000)
    yield put({type:'DECREMENT'})
}

function* watchDecrementAsync(){
    yield takeEvery('DECREMENT_ASYNC', decrementAsync)
}

export default function* rootSaga(){
    yield all([
        helloSaga(),
        watchIncrementAsync(),
        watchDecrementAsync()
    ])
}