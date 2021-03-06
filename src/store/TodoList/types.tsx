export interface TodoListState{
    todoLists:ITodoList[] | any[];
    currentList: ITodoList | {};
    loading:boolean;
}

export interface ITodoList{
    id:number;
    title:string;
    description:string;
    tasks:ITask[];
}

export interface ITask{
    id:number;
    title:string;
    isComplete:boolean;
}