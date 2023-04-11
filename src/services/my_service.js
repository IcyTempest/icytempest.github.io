import axios from 'axios';

import todoDao from '@/dao/todo_dao';

class MyService{
    async getTodos(){
        const resp = await todoDao.fetchList()
        return resp;
    }

    async addTodo(body){
        const resp = await todoDao.addList(body);
        return resp;
    }

    async updateTodos(id, body){
        const resp = await todoDao.updateList({id:id, body});
        return resp;
    }

    async deleteTodo(id){
        const resp = await todoDao.deleteTodo(id);
        return resp;
    }
}

const service = new MyService();

export default service