import * as React from 'react';
import {Component} from "react";
import TodoListContainer from "../../store/TodoList/container";

class TodoLists extends Component<any,any>{
    componentWillMount(): void {
        this.props.getAllTodoList();
    }
    render(){
        console.log("Properties",this.props);
        return(
            <div>
                Reached TodoList module
            </div>
        )
    }
}
export default TodoListContainer(TodoLists);