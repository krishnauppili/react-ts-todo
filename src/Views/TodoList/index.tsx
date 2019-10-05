import * as React from 'react';
import {Component} from "react";
import _ from "lodash";
import TodoListContainer from "../../store/TodoList/container";
import TodoList from "../../store/TodoList/models/todo_model";
import "./styles.todoList.css";

class TodoLists extends Component<any,any>{

    componentWillMount(): void {
        this.props.getAllTodoList();
    }

    render(){
        const {todoLists,getCurrentTodoList} = this.props;
        return(
            <div className="todo-lists">
                <div style={{marginBottom:"1rem"}}>
                    <span>Todo lists</span>
                    <span className="ml-1"><button>Add List</button></span>
                </div>
                {todoLists.map((todoListItem:TodoList,i:number)=>{
                    const totalTasks = todoListItem.tasks.length;
                    const completedTasks = _.filter(todoListItem.tasks,{isComplete:true}).length;
                    return(
                        <div key={i} className="todo-list-item"
                             onClick={()=>getCurrentTodoList(todoLists,todoListItem.id)}>
                            <div className="list-title">Title : {todoListItem.title}</div>
                            <div>Description : {todoListItem.description}</div>
                            <div>Task Total : {totalTasks} | Completed: {completedTasks}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default TodoListContainer(TodoLists);