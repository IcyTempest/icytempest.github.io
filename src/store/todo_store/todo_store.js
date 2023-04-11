// import myServices from "@/services/my_service";
// import { v4 } from 'uuid';

// export default{
//     namespaced: true,
//     state(){
//         return {
//             todoList: []
//         };
//     },
//     getters:{
//         getTodos(state){
//             return state.todoList;
//         }
//     },
//     mutations:{
//         onUpdateToDoList(state, data){
//             console.log("REEEEE");
//             data.forEach((element)=>{
//                 const index = state.todoList.findIndex((e)=>e.id==element.id);
//                 if(index<0){
//                     state.todoList.push(element);
//                 }
//                 else{
//                     state.todoList[index]=element;
//                 }
//             });
//         },

//         onDeleteTodo(state, id){
//             const index = state.todoList.findIndex(e=>e.id==id);
//             state.todoList.splice(index, 1);
//         }
//     },
//     actions:{
//         async onFetchTodos(context){
//             const data = await myServices.getTodos();
//             console.log(context);
//             context.commit("onUpdateTodoList", data);
//         },

//         async addTodo({ commit }, data){
//             console.log("roseV3")
//             const id = v4();
//             const createdAt = new Date();
//             console.log("riseeeeee")
//             const body = {
//                 todo: data,
//                 id: id,
//                 created_at: createdAt.toLocaleDateString()
//             };

//             console.log("risee");
//             console.log(body);
            
//             // const newData = await myServices.addTodo(body);
//             commit("onUpdateToDoList", [])
//         },


//         async updateTodo({ commit }, data){
//             const body = {
//                 todo: data.todo
//             };
//             const params={
//                 id: data.id
//             }
//             const newData = await myServices.updateTodos(body, params);
//             commit("onUpdateToDoList", newData)
//         },

    
//         async deleteTodo({ commit }, id){
//             await myServices.deleteTodo(id);
//             commit("onDeleteTodo", id)
//         }
//     }
// }