/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faHatWizard } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import { v4 } from 'uuid';

import { createStore } from 'vuex'
import myServices from './services/my_service';

const store = createStore({
    state(){
        return {
            todoList: []
        };
    },
    getters:{
        getTodos(state){
            return state.todoList;
        }
    },
    mutations:{
        updateToDoList(state, data){
            data.forEach((element)=>{
                const index = state.todoList.findIndex((e)=>e.id==element.id);
                if(index<0){
                    state.todoList.push(element);
                }
                else{
                    state.todoList[index]=element;
                }
            });
        },

        onDeleteTodo(state, id){
            const index = state.todoList.findIndex(e=>e.id==id);
            state.todoList.splice(index, 1);
        }
    },
    actions:{
        async onFetchTodos(context){
            const data = await myServices.getTodos();
            context.commit("updateToDoList", data);
        },

        async addTodo({ commit }, data){
            
            const id = v4();
            const createdAt = new Date();
            const body = {
                todo: data,
                id: id,
                created_at: createdAt.toLocaleDateString()
            };
            const newData = await myServices.addTodo(body);
            commit("updateToDoList", [newData])
        },


        async updateTodo(context, data){
            await myServices.updateTodos(data.id, data);
            // commit("updateToDoList", [data])
        },


        async deleteTodo({ commit }, id){
            await myServices.deleteTodo(id);
            // commit("updateToDoList", id)
        }
    }
})




const app = createApp(App)


registerPlugins(app)

library.add(faHatWizard)


app.component('font-awesome-icon', FontAwesomeIcon)

app.use(store);

app.mount('#app')
