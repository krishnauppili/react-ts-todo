import {combineReducers} from "redux";
import {TodoListState} from "../TodoList/types";
import todoListReducer from "../TodoList/reducers";

// The top-level state object
export interface ApplicationState {
    todoList: TodoListState;
}

const RootReducer = combineReducers<ApplicationState>({
    todoList:todoListReducer,
});
export default RootReducer;