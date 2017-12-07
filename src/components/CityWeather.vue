<template>
  <div class="city-weather">
    <h1>{{ selected }}</h1>
    <div id="cities" class="cities">
      <form class="form" >
        <select class="input form__input" v-model="selected" @change="getWeather">
          <option v-for="city in cities" v-bind:value="city.name">
            {{ city.name }}
          </option>
        </select>
      </form>
      <div class="todo-list" v-if="weatherData && weatherData.list && weatherData.list.length > 0">
        <li
          class="todo-list__item"
          v-for="weather in weatherData.list">
          <button
            class="todo-list__item-content">
            {{ weather.main.temp }}&deg;C
          </button>
        </li>
      </div>
      <div class="todo-list" v-else>
        <li
          class="todo-list__item">
          <button
            class="todo-list__item-content">
            {{weatherData.message}}
          </button>
        </li>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      getWeather(e) {
        this.$store.dispatch('getWeather', e.target.value);
      },
    },
    computed: {
      cities() {
        return this.$store.getters.cities;
      },
      weatherData() {
        return this.$store.getters.weatherData;
      },
    },
    props: ['name'],
    mounted() {
      this.$store.dispatch('getWeather', this.name);
    },
    data() {
      return {
        selected: this.name,
      };
    },
  };
</script>
