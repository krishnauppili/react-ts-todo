import {TodoListState} from "./types";
import {CreateReducer} from "../../lib/create_reducer";
import {GET_ALL_TODO_LIST_SUCCESS} from "./constants";

const initialState:TodoListState = {
    todoLists:[],
    currentList:{
        title:'',
        description:'',
        tasks:[],
    },
    loading:false,
};

const todoListReducer = CreateReducer(initialState, {
    [GET_ALL_TODO_LIST_SUCCESS](state:TodoListState, action:any) {
        return {...state, todoLists:action.payload};
    },
});
export default todoListReducer;