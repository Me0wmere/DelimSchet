<template>
  <div class="about">
    <h3>Список людей1</h3>
    <ul>
      <li v-for="(person, index) in people" :key="index">{{ person }}</li>
    </ul>
  </div>
</template>

<script>
import { usePeopleStore } from '../router/counter';

export default {
  computed: {
    people() {
      const peopleStore = usePeopleStore();
      return peopleStore.people;
    }
  }
};
</script>

<style scoped>
.about {
  padding: 10px;
}
</style>
