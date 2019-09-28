import { takeEvery, call, put,all,delay,fork } from 'redux-saga/effects'
import {GET_ALL_TODO_LIST_SUCCESS, GET_ALL_TODO_LISTS} from "./constants";
import {GetAllTodoListAction} from "./actions";
import * as API from "./api";

function* handleFetch(action:GetAllTodoListAction){
   try{
       const response = yield call(API.getAllTodoList);
       yield put({type: GET_ALL_TODO_LIST_SUCCESS,payload:response});
       debugger;
   }
   catch (e) {
       
   }
}

function* watchFetchRequest() {
    yield takeEvery(GET_ALL_TODO_LISTS, handleFetch);
}

export default function* TodoListSaga() {
    yield all([fork(watchFetchRequest)]);
}