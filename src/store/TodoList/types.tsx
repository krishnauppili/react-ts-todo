export interface TodoListState{
    todoLists:ITodoList[];
    currentList:ITodoList;
    loading:boolean;
}

export interface ITodoList{
    title:string;
    description:string;
    tasks:ITask[];
}

export interface ITask{
    title:string;
    isComplete:boolean;
}