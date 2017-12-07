<template>
  <div id="cities" class="cities">
    <form class="form" v-on:submit="addCity">
      <input class="input form__input" 
             :value="newCity"
             @change="getCity">
      <button class="btn form__submit-btn" type="submit">Add</button>
    </form>
    <list-cities></list-cities>
  </div>
</template>
<script>
	import ListCities from './ListCities';

export default {
  components: {
    'list-cities': ListCities,
  },
  methods: {
    getCity(e) {
      this.$store.dispatch('getCity', e.target.value);
    },
    addCity() {
      this.$store.dispatch('addCity');
      this.$store.dispatch('clearCity');
    },
  },
  computed: {
    newCity() {
      return this.$store.getters.newCity;
    },
  },
};
</script>