import { collection, getDocs, updateDoc, doc, setDoc, deleteDoc } from 'firebase/firestore';
import db from './db';

class TodoDao{
    async fetchList(){
        const docRef = collection(db, "todo_list");
        const docSnap = await getDocs(docRef);

        const newData = [];
        docSnap.forEach((e)=>newData.push(e.data()));
        return newData;
    }

    async addList({todo, id, created_at}){
        
        const myFirstAdd = doc(db, "todo_list", id);
        const data = {
            todo: todo,
            id: id,
            isCompleted: false,
            created_at: created_at
        }
        await setDoc(myFirstAdd, data);
        return data;
    }

    async updateList({id, body}){
        const myDoc = doc(db, "todo_list", id);
        
        await updateDoc(myDoc, body);

        return body
    }

    async deleteTodo(id){
        const myDoc = doc(db, "todo_list", id);
        await deleteDoc(myDoc);
        return {message: "success"};
    }
}
const todoDao = new TodoDao()
export default todoDao;