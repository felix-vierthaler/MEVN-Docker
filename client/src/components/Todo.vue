<template>
  <div id="todo">
      <div class="text">
          <h2 id="title">{{title}}</h2>
          {{description}}
      </div>
      <div class="actions">
          <v-btn class="mx-4" fab dark medium color="error" @click="$emit('delete')">
            <v-icon>mdi-minus</v-icon>
          </v-btn>
      </div>
      
      
  </div>
</template>

<script>
export default {
    props: ['title', 'description'],
}
</script>

<style scoped>
    #todo{
        margin: 1em 0;
        padding: 1em 2em;
        background-color: gainsboro;

        display: flex;
        justify-content: space-between;
    }
</style>