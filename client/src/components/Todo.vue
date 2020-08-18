<template>
  <div id="todo">
      <h2 id="title">{{title}}</h2>
      {{description}}
  </div>
</template>

<script>
export default {
    props: ['title', 'description']
}
</script>

<style scoped>
    #todo{
        margin: 1em 2em;
        padding: 1em 2em;
        background-color: gainsboro;
    }
</style>