<template>
    <div class="user-info">
      <h1>{{ msg }}</h1>
      <p>
        Bagno primo piano
      </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'survey-point-edit',
    props: {
      msg: String
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  