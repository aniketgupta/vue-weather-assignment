import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cities: [],
    newCity: '',
    weatherData: '',
  },
  mutations: {
    GET_CITY(state, city) {
      const data = state;
      data.newCity = city;
    },
    ADD_CITY(state) {
      state.cities.push({
        name: state.newCity,
      });
    },
    REMOVE_CITY(state, city) {
      const cities = state.cities;
      cities.splice(cities.indexOf(city), 1);
    },
    CLEAR_CITY(state) {
      const data = state;
      data.newCity = '';
    },
    GET_WEATHER(state, wData) {
      const data = state;
      data.weatherData = wData;
    },
  },
  actions: {
    getCity({ commit }, city) {
      commit('GET_CITY', city);
    },
    addCity({ commit }) {
      commit('ADD_CITY');
    },
    removeCity({ commit }, city) {
      commit('REMOVE_CITY', city);
    },
    clearCity({ commit }) {
      commit('CLEAR_CITY');
    },
    getWeather({ commit }, city) {
      fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=5&appid=da12bc12e620f1c4378230883004ac50`, { method: 'GET' })
      .then(res => res.json())
      .then((data) => {
        commit('GET_WEATHER', data);
      });
    },
  },
  getters: {
    newCity: state => state.newCity,
    cities: state => state.cities,
    weatherData: state => state.weatherData,
  },
  plugins: [vuexLocal.plugin],
});

