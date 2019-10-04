import {
    list,
    object,
    serialize,
    deserialize,
    serializable,
    identifier,
} from 'serializr';
import _ from "lodash";
import {ITask, ITodoList} from "../types";

class Task implements ITask{
    @serializable(identifier())
    id = Math.random();
    @serializable title = "";
    @serializable isComplete = false;
}

class TodoList implements ITodoList{
    @serializable(identifier())
    id = Math.random();

    @serializable
    title = "";

    @serializable
    description = '';

    @serializable(list(object(Task)))
    tasks = [];

    static deserializeObject(json:{}){
        return deserialize(TodoList,json);
    }

    serializeObject(){
        return _.omitBy(serialize(this).serializeObject(), _.isNil);
    }
}
export default TodoList;