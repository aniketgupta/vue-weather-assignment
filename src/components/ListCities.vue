<template>
  <div class="city-list">
    <li
      class="city-list__item"
      v-for="city in cities">
      <button
        class="city-list__item-content"
        @click="redirect(city)">
        {{ city.name }}
      </button>
      <button
        class="btn city-list__item-remove"
        @click="remove(city)">
        <icon name="times"></icon>
      </button>
    </li>
  </div>
</template>
<script>
  import Icon from 'vue-awesome/components/Icon';
  import 'vue-awesome/icons/times';

  export default {
    methods: {
      remove(city) {
        this.$store.dispatch('removeCity', city);
      },
      redirect(city) {
        this.$router.push({ name: 'CityWeather', params: { name: city.name } });
      },
    },
    computed: {
      cities() {
        return this.$store.getters.cities;
      },
    },
    components: {
      icon: Icon,
    },
  };
</script>
