<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form>
      Font Size: <input type="number" v-model.number="fontSize"/>
      <span>font size is: {{fontSize}}</span>
    </form>
    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">AAAA</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      activeColor: 'red',
      fontSize: 0,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
