import { takeEvery, call, put} from 'redux-saga/effects';
import _ from "lodash";
import {
    GET_ALL_TODO_LIST_FAILURE,
    GET_ALL_TODO_LIST_SUCCESS,
    GET_ALL_TODO_LISTS,
    GET_CURRENT_TODO_LIST, GET_CURRENT_TODO_LIST_FAILURE, GET_CURRENT_TODO_LIST_SUCCESS
} from "./constants";
import {GetAllTodoListAction, GetCurrentTodoListAction} from "./actions";
import * as API from "./api";
import TodoList from "./models/todo_model";

function* handleFetchRequest(action:GetAllTodoListAction){
   try{
       const response = yield call(API.getAllTodoList);
       const todoLists = TodoList.deserializeObject(response);
       yield put({type: GET_ALL_TODO_LIST_SUCCESS,payload:todoLists});
   }
   catch (e) {
       yield put({type: GET_ALL_TODO_LIST_FAILURE,payload:{message:"Something went wrong"}});
   }
}

function* handleGetRequest(action:GetCurrentTodoListAction){
    try{
        const {todoListId,todoLists} = action.payload;
        const currentTodoList = _.find(todoLists, _.matchesProperty('id', todoListId));
        yield put({type: GET_CURRENT_TODO_LIST_SUCCESS,payload:currentTodoList});
    }
    catch (e) {
        yield put({type: GET_CURRENT_TODO_LIST_FAILURE,payload:{message:"Something went wrong"}});
    }
}

export default function* TodoListSaga() {
    yield takeEvery(GET_ALL_TODO_LISTS,handleFetchRequest);
    yield takeEvery(GET_CURRENT_TODO_LIST,handleGetRequest);
}