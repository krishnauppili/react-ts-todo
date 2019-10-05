import {TodoListState} from "./types";
import {CreateReducer} from "../../lib/create_reducer";
import {GET_ALL_TODO_LIST_SUCCESS, GET_CURRENT_TODO_LIST_SUCCESS, UPDATE_TASK} from "./constants";
import {Task} from "./models/todo_model";
import _ from "lodash";

const initialState:TodoListState = {
    todoLists:[],
    currentList:{},
    loading:false,
};

const todoListReducer = CreateReducer(initialState, {
    [GET_ALL_TODO_LIST_SUCCESS](state:TodoListState, action:any) {
        let {currentList} = state;
        if(currentList && (!currentList['id']) && action.payload.length > 0){
            return {...state, todoLists:action.payload,currentList:action.payload[0]};
        }
        else{
            return {...state, todoLists:action.payload};
        }
    },
    [GET_CURRENT_TODO_LIST_SUCCESS](state:TodoListState, action:any) {
        return {...state, currentList:action.payload};
    },
    [UPDATE_TASK](state:TodoListState, action:any) {
        let {taskId,isChecked} = action.payload;
        let newState = _.cloneDeep(state);
        let {currentList,todoLists} = newState;
        currentList['tasks'] = currentList['tasks'].map((task:Task) => task.id == taskId ? (task.isComplete = isChecked, task) : task);
        let currentListIndex = _.findIndex(todoLists, { id:currentList['id']});
        todoLists[currentListIndex] = currentList;
        return {...state,currentList,todoLists};
    },
});
export default todoListReducer;

