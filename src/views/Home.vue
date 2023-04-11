<template>
  <v-container class="ml-4">
    <v-row>
      <v-col cols="12">
        <div class="d-flex flex-row justify-center align-center">
          <input v-model.trim="myTextField" id="rise" class="mr-5" style="border: 2px solid grey; border-radius: 5px;">
          <v-btn id="myBtn" density="comfortable" rounded="xs" size="x-large" style="height:100%" @click="addTodo">Add</v-btn>
          <div class="ml-auto">
            <input v-model.trim="filter" style="border: 2px solid grey; border-radius: 5px;">
            <v-btn class="ml-5" density="comfortable" rounded="xs" size="x-large" @click="makeChanges">Search</v-btn>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="ma-5" v-for="(element, index) in getTodos">
          <div class="ma-5 rose d-flex flex-row align-center justify-center">
              <v-text-field id="minorEdit" v-if="editModes[index]" v-model.trim="minorEditField[index].newTodo" 
              label="Label" variant="outlined" class="w-auto"></v-text-field>        
              <div class="mr-auto" v-else>
                <p v-if="element.isCompleted"><del>{{ element.todo }}</del></p>
                <p v-else>{{ element.todo }}</p>
              </div>
              
            <v-btn v-if="!editModes[index]" class="myHiddenButton ml-5" size="small" 
            @click="editModes[index]=true"
            >Edit</v-btn>
            <v-btn v-if="!editModes[index]" class="myHiddenButton ml-5" size="small"
            @click="onDelete(element.id)">Delete</v-btn>
            <div v-else>
              <v-btn class="myHiddenButton ml-5" size="small" @click="updateTodo(element.id, minorEditField[index].newTodo, index)">Submit</v-btn>
              <v-btn class="myHiddenButton ml-5" size="small" @click="editModes[index]=false">Cancel</v-btn>
            </div>
            <div class="d-flex flex-row">
              <v-checkbox v-model="isCompleteds[index]" @update:focused="onUpdate(element.id, $event, element.todo)" color="indigo-darken-3" label="Completed"></v-checkbox>          
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

  .rose{
    background-color: rgb(174, 174, 174);
    border-radius: 5px;
    padding: 15px;

  }
  .rose .myHiddenButton{
    /* display: none; */
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;
  }

  .rose:hover .myHiddenButton{
    /* display: block; */
    visibility: visible;
    opacity: 1;
  }
  
  .myHiddenButton{
    border: 1px solid rgb(76, 76, 76);
    border-radius: 5px;
  }
</style>

<script>
import { getVNodeBlockHelper } from '@vue/compiler-core';

  export default{ 
    mounted(){
      const input = document.getElementById("rise");

      // Execute a function when the user presses a key on the keyboard
      input.addEventListener("keypress", function(event) {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {
          // Cancel the default action, if needed
          event.preventDefault();
          // Trigger the button element with a click
          document.getElementById("myBtn").click();
        }
      });

      const minorEdit = document.getElementById("minorEdit");

      minorEdit
      
    },

    async created(){
      await this.$store.dispatch("onFetchTodos")
    },
    data(){
      return {
        myTextField: null,

        
        minorEditField: [],
        editModes: [],
        isCompleteds: [],
        filter: null,
      };
    },

    computed:{
      getTodos(){
        const list = this.$store.getters["getTodos"].filter((e)=>{
          const number1 = e.todo.toLowerCase().trim()
          const number2 = (this.filter?.toLowerCase()?.trim() || e.todo.toLowerCase().trim())
          return number1.match(number2)
        });
        this.makeChanges(list);
        return list;
      }
    },

    methods:{
      makeChanges(list){
        for(let i = 0; i<list.length; i++){
          const data = {
            newTodo: list[i]?.todo,
          };
          this.isCompleteds.push(list[i].isCompleted);
          this.editModes.push(false)
          this.minorEditField.push(data);
        };
        
      },

      async addTodo(){
        await this.$store.dispatch("addTodo", this.myTextField);
        this.myTextField=null;
      },

      async updateTodo(id, todo, index){
        const data = {
          id: id,
          todo: todo
        };
        this.editModes[index]=false;

        await this.$store.dispatch("updateTodo", data);

        this.getTodos[index].todo = todo;
      },
      async onUpdate(id, event, todo){
        const data ={
          id: id,
          todo: todo,
          isCompleted: event
        };
        await this.$store.dispatch("updateTodo", data);
      },

      async onDelete(id){
        await this.$store.dispatch("deleteTodo", id);
        const index = this.getTodos.find((e)=>e.id==id);
        this.getTodos.splice(index, 1);
      }
    }
  }
</script>
