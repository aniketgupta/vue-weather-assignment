<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
*, *:before, *:after {
  box-sizing: border-box;
}

html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-feature-settings: "liga", "kern";
          font-feature-settings: "liga", "kern";
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
  background: -webkit-linear-gradient(240deg, #9adbbe, #4fc08d);
  background: linear-gradient(210deg, #9adbbe, #4fc08d);
}

body {
  overflow: hidden;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  font-family: "Source Sans Pro", sans-serif;
}

button {
  background: none;
  border: none;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
}
button:focus {
  outline: none;
}
button:hover {
  cursor: pointer;
}

.cities {
  min-height: 50vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  border-radius: 1em;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 0 5px rgba(25, 25, 25, 0.25);
}

.btn {
  font-size: 14px;
  margin: 0 .5em;
  border-radius: 2em;
  padding: 0.75em 1.5em;
  cursor: pointer;
  background: none;
  color: #2d7c58;
  border: 1px solid;
  letter-spacing: 1px;
  font-family: "Source Sans Pro", sans-serif;
  color: #4fc08d;
  border: #4fc08d 1px solid;
  -webkit-transition: 250ms ease-out;
  transition: 250ms ease-out;
}
.btn:hover, .btn:focus, .btn.active {
  color: #fff;
  background: #4fc08d;
}

.form {
  width: 100%;
  padding: 1.5rem 1rem 0 1rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.form__input {
  width: 100%;
  font-size: 14px;
  margin: 0 .5em;
  border-radius: 2em;
  padding: 0.75em 1.5em;
  background: none;
  font-family: "Source Sans Pro", sans-serif;
  border: #e3e3e3 1px solid;
  -webkit-transition: border 250ms ease-out;
  transition: border 250ms ease-out;
}
.form__input:focus {
  border: #4fc08d 1px solid;
  outline: none;
}

.city-list {
  width: 100%;
  padding: 0 1rem;
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
}
.city-list__item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding: .5em;
  margin-bottom: .5em;
  border-radius: 3px;
  -webkit-transition: 200ms;
  transition: 200ms;
  color: #4fc08d;
}
.city-list__item:last-child {
  margin-bottom: 0;
}
.city-list__item.complete {
  color: lightgreen;
}
.city-list__item.complete .city-list__item-content:after {
  background: lightgreen;
}
.city-list__item-content {
  position: relative;
}
.city-list__item-content:after {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: 1px;
  background: #4fc08d;
  -webkit-transition: 250ms ease-out;
  transition: 250ms ease-out;
  -webkit-transform-origin: center;
          transform-origin: center;
  -webkit-transform: scalex(0);
          transform: scalex(0);
}
.city-list__item-content:hover:after, .city-list__item-content:focus:after {
  -webkit-transform: scalex(1);
          transform: scalex(1);
}
.city-list__item-remove {
  margin-left: .5em;
  background: none;
  border: 1px solid;
  color: inherit;
  padding: 0;
  line-height: 1;
  width: 2em;
  height: 2em;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  border-radius: 50%;
  font-size: 80%;
}
.list {
  width: 100%; 
  border-bottom: 1px dotted #CCC; 
  margin-bottom: 10px; 
  padding-bottom: 10px;
}
.grid {
  float: left; 
  width: 20%; 
  height: 50px; 
  border-right: 1px dotted #CCC; 
  border-bottom: 1px dotted #CCC; 
  padding: 20px;
}
</style>
