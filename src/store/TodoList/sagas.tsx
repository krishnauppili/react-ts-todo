import { takeEvery, call, put,all,fork } from 'redux-saga/effects'
import {GET_ALL_TODO_LIST_FAILURE, GET_ALL_TODO_LIST_SUCCESS, GET_ALL_TODO_LISTS} from "./constants";
import {GetAllTodoListAction} from "./actions";
import * as API from "./api";
import TodoList from "./models/todo_model";

function* handleFetch(action:GetAllTodoListAction){
   try{
       const response = yield call(API.getAllTodoList);
       const todoLists = TodoList.deserializeObject(response);
       yield put({type: GET_ALL_TODO_LIST_SUCCESS,payload:todoLists});
   }
   catch (e) {
       yield put({type: GET_ALL_TODO_LIST_FAILURE,payload:{message:"Something went wrong"}});
   }
}

function* watchFetchRequest() {
    yield takeEvery(GET_ALL_TODO_LISTS, handleFetch);
}

export default function* TodoListSaga() {
    yield all([fork(watchFetchRequest)]);
}