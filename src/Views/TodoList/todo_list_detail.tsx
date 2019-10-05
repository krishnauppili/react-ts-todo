import * as React from 'react';
import {Component} from "react";
import TodoListContainer from "../../store/TodoList/container";
import "./styles.todoList.css";
import {Task} from "../../store/TodoList/models/todo_model";

class TodoListDetail extends Component<any,any>{

    render(){
        const {currentList,updateTask} = this.props;
        return(
            <div className="todo-list-detail">
                <div>Title : {currentList.title}</div>
                <div className="mt-1">Description : {currentList.description}</div>
                <div className="mt-1">Tasks</div>
                {currentList.tasks && currentList.tasks.length > 0 && currentList.tasks.map((taskItem:Task,i:number)=>{
                    return(
                        <div key={i} style={{marginTop:"10px"}} className="task-item">
                            <span><input type="checkbox" checked={taskItem.isComplete} onChange={(e)=>{
                                updateTask(taskItem.id,e.target.checked);
                            }}/></span>
                            <span className={taskItem.isComplete?"completed ml-1":"incomplete ml-1"}>{taskItem.title}</span>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default TodoListContainer(TodoListDetail);