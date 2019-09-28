export interface TodoListState{
    todoLists:TodoList[];
    currentList:TodoList;
    loading:boolean;
}

export interface TodoList{
    title:string;
    description:string;
    tasks:Task[];
}
export interface Task{
    description:string;
    isComplete:boolean;
}