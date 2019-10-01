import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {getAllTodoList} from "./actions";
import {ApplicationState} from "../Root/reducer";

export default function TodoListContainer(component:any) {
    return connect(mapStateToProps,mapDispatchToProps)(component);
}

function mapDispatchToProps(dispatch:Dispatch) {
    return bindActionCreators({getAllTodoList}, dispatch);
}

function mapStateToProps(state:ApplicationState) {
    return {
        todoLists:state.todoList.todoLists,
        currentList:state.todoList.currentList,
        loading:state.todoList.loading,
    };
}
