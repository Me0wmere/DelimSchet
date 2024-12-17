import { defineStore } from 'pinia';

export const usePeopleStore = defineStore('peopleStore', {
  state: () => ({
    people: []
  }),
  actions: {
    setPeople(people) {
      this.people = people;
    }
  }
});
