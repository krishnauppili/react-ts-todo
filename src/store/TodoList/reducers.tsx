import {TodoListState} from "./types";
import {CreateReducer} from "../../lib/create_reducer";
import {GET_ALL_TODO_LIST_SUCCESS, GET_CURRENT_TODO_LIST_SUCCESS} from "./constants";

const initialState:TodoListState = {
    todoLists:[],
    currentList:{},
    loading:false,
};

const todoListReducer = CreateReducer(initialState, {
    [GET_ALL_TODO_LIST_SUCCESS](state:TodoListState, action:any) {
        let {currentList} = state;
        if(!currentList['id'] && action.payload.length > 0){
            return {...state, todoLists:action.payload,currentList:action.payload[0]};
        }
        else{
            return {...state, todoLists:action.payload};
        }
    },
    [GET_CURRENT_TODO_LIST_SUCCESS](state:TodoListState, action:any) {
        return {...state, todoLists:action.payload};
    },

});
export default todoListReducer;

