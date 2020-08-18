<template>
  <v-app>
        <div>
          <v-toolbar>
            <v-toolbar-title>Todo Application</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
        </div>

        <v-row>
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

          <v-btn class="mx-2" fab dark color="indigo" @click="addTodo">
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>

        </v-row>

        

        <div>
          <Todo :key="todo" v-for="todo in todos.slice().reverse()" :title="todo.title" :description="todo.description"/>

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
      .then((response) => {
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
    }
  },

  mounted () {
    this.fetchTodos()
  }

};
</script>
