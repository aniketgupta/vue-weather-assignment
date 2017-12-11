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
        <button class="btn form__submit-btn" @click="changeView('list')">List View</button>
        <button class="btn form__submit-btn" @click="changeView('grid')">Grid View</button>
      </form>
      <div class="city-list" v-if="weatherData && weatherData.list && weatherData.list.length > 0">
        <li
          :class="[view === 'list' ? 'city-list__item list' : 'city-list__item grid']"
          v-for="weather in weatherData.list">
          <button
            class="city-list__item-content">
            {{ weather.main.temp }}&deg;C
          </button>
        </li>
      </div>
      <div class="city-list" v-else>
        <li
          class="city-list__item">
          <button
            class="city-list__item-content">
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
      changeView(type) {
        this.view = type;
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
        view: 'list',
      };
    },
  };
</script>
