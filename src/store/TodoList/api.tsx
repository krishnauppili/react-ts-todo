let faker = require('faker');

export function getAllTodoList(){
    let todoLists =[];
    for (let i=0;i<25;i++){
        let tasks = [];
        for(let j=0;j<10;j++){
            let taskItem = { title:faker.lorem.words() };
            tasks.push(taskItem);
        }
        let todoListItem = {
            title:faker.lorem.words(),
            description:faker.lorem.sentence(),
            tasks:tasks
        };
        todoLists.push(todoListItem);
    }
    return todoLists;
}