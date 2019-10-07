import * as React from 'react';
import {Component} from "react";
import _ from "lodash";
import TodoListContainer from "../../store/TodoList/container";
import TodoList from "../../store/TodoList/models/todo_model";
import "./styles.todoList.css";

class AddTodoList extends Component<any,any>{

    constructor(props:any){
        super(props);
        this.state = {
            newList: new TodoList(),
        }
    }

    handleChange = (name:string,value:any) => {
        const clonedList = _.cloneDeep(this.state.newList);
        clonedList[name] = value;
        this.setState({newList:clonedList});
    };

    render(){
        return(
            <div className="add-todo-list mt-1">
                <input name="title" placeholder="Enter Task title"
                       onChange={(e)=>{this.handleChange("title",e.target.value)}}/>
                <textarea name="description" className="ml-1"
                          placeholder="Enter Task description"
                          onChange={(e)=>{this.handleChange("description",e.target.value)}}/>
                <button className="ml-1">Add</button>
            </div>
        )
    }
}
export default TodoListContainer(AddTodoList);