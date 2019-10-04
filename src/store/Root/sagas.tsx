import {all} from "redux-saga/effects";
import TodoListSaga from "../TodoList/sagas";
export default function* RootSaga() {
    yield all([
        TodoListSaga(),
    ]);
}