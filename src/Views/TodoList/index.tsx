import * as React from 'react';
import {Component} from "react";
import TodoListContainer from "../../store/TodoList/container";
import TodoList from "../../store/TodoList/models/todo_model";
import "./styles.todoList.css";

class TodoLists extends Component<any,any>{

    componentWillMount(): void {
        this.props.getAllTodoList();
    }

    render(){
        const {todoLists,currentList} = this.props;
        console.log(todoLists,currentList);
        return(
            <div className="todo-lists">
                <div style={{marginBottom:"1rem"}}>Todo lists</div>
                {todoLists.map((todoListItem:TodoList,i:number)=>{
                    return(
                        <div key={i} className="todo-list-item">
                            <div className="list-title">Title : {todoListItem.title}</div>
                            <div>Description : {todoListItem.description}</div>
                            <div>Task Total : {todoListItem.tasks.length}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default TodoListContainer(TodoLists);