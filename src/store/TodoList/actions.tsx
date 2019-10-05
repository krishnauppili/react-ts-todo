import {Action, ActionCreator} from "redux";
import {GET_ALL_TODO_LISTS, GET_CURRENT_TODO_LIST, UPDATE_TASK} from "./constants";
import TodoList from "./models/todo_model";


export interface GetAllTodoListAction extends Action<GET_ALL_TODO_LISTS>{
    type:GET_ALL_TODO_LISTS,
    payload:{

    }
}

export interface GetCurrentTodoListAction extends Action<GET_CURRENT_TODO_LIST>{
    type:GET_CURRENT_TODO_LIST,
    payload:{
        todoLists:TodoList[],
        todoListId:number
    }
}

export interface UpdateTaskAction extends Action<UPDATE_TASK>{
    type:UPDATE_TASK,
    payload:{
        taskId:number,
        isChecked:boolean,
    }
}


export const getAllTodoList: ActionCreator<GetAllTodoListAction> = () => ({
    type: GET_ALL_TODO_LISTS,
    payload: {},
});

export const getCurrentTodoList:ActionCreator<GetCurrentTodoListAction> = (todoLists:TodoList[],currentListId:number,) => ({
    type: GET_CURRENT_TODO_LIST,
    payload:{
        todoLists:todoLists,
        todoListId:currentListId,
    }
});

export const updateTask:ActionCreator<UpdateTaskAction> = (taskId:number,isChecked:boolean) => ({
    type: UPDATE_TASK,
    payload:{
        taskId,
        isChecked,
    }
});

export type TodoListActions = GetAllTodoListAction;