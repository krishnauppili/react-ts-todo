import {Action, ActionCreator} from "redux";
import {GET_ALL_TODO_LISTS} from "./constants";


export interface GetAllTodoListAction extends Action<GET_ALL_TODO_LISTS>{
    type:GET_ALL_TODO_LISTS,
    payload:{

    }
}

export const getAllTodoList: ActionCreator<GetAllTodoListAction> = () => ({
    type: GET_ALL_TODO_LISTS,
    payload: {

    },
});

export type TodoListActions = GetAllTodoListAction;