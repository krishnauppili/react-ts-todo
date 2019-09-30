import {all,fork} from "redux-saga/effects";
import TodoListSaga from "../TodoList/sagas";
export default function* RootSaga() {
    yield all([
        fork(TodoListSaga),
    ]);
}