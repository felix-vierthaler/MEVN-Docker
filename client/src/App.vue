<template>
  <v-app>
    <div>
      <v-toolbar>
        <v-toolbar-title>MEVN Todo Application</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
    </div>


    <div id="content">
      <v-row align="top">
        <v-col sm="3">
          <v-text-field
            label="Title"
            single-line
            solo
            v-model="input.title"
          ></v-text-field>
        </v-col>

        <v-col sm="6">
          <v-text-field
            label="description"
            single-line
            solo
            v-model="input.description"
          ></v-text-field>
        </v-col>

        <v-spacer></v-spacer>

        <v-col>
          <v-btn class="mx-4" fab dark medium color="indigo" @click="addTodo">
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
        </v-col>
        

      </v-row>

      <v-divider></v-divider>

      <div>
        <Todo :key="todo" v-for="todo in todos.slice().reverse()" @delete="deleteTodo(todo._id)" :title="todo.title" :description="todo.description"/>
      </div>

    </div>

        
  </v-app>
</template>

<script>
import Todo from './components/Todo'

import axios from 'axios'

export default {
  name: 'App',
  components: {
    Todo
  },


  data: () => ({
    todos: [],
    input: {},
    url: 'http://164.90.229.206/api'
  }),

  methods: {
    addTodo() {
      console.log('submit')
      axios.post(this.url + '/todos', this.input)
      .then(response => {
        console.log(response)
        this.fetchTodos()
      }, (error) => {
        console.log(error);
      });
      this.input = {}
    },

    fetchTodos() {
      axios
      .get(this.url + '/todos')
      .then(response => (this.todos = response.data))
    },

    deleteTodo(id) {
      axios
      .delete(this.url + '/todos/' + id)
      .then(response => {
        console.log(response)
        this.fetchTodos()
      }, (error) => {
        console.log(error);
      });
    }
  },

  mounted () {
    setInterval(() => { this.fetchTodos() }, 1000);
  }

};
</script>

<style>
  #content{
    margin: 50px;
  }
</style>
