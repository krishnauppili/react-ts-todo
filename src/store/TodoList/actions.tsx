import {Action, ActionCreator} from "redux";
import {GET_ALL_TODO_LIST_SUCCESS, GET_ALL_TODO_LISTS} from "./constants";


export interface GetAllTodoListAction extends Action<GET_ALL_TODO_LISTS>{
    type:GET_ALL_TODO_LISTS,
    payload:{

    }
}

export interface GetAllTodoListActionSuccess extends Action<GET_ALL_TODO_LIST_SUCCESS>{
    type:GET_ALL_TODO_LIST_SUCCESS,
    payload:any
}

export const getAllTodoList: ActionCreator<GetAllTodoListAction> = () => ({
    type: GET_ALL_TODO_LISTS,
    payload: {
    },
});

export type TodoListActions = GetAllTodoListAction;