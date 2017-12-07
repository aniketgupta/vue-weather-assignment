import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import AddCities from '@/components/AddCities';
import CityWeather from '@/components/CityWeather';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/cities',
      name: 'AddCities',
      component: AddCities,
    },
    {
      path: '/cities/:name',
      name: 'CityWeather',
      component: CityWeather,
      props: true,
    },
  ],
});
