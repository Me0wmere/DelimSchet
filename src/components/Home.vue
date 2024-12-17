<template>
  <div class="app">
    <form @submit.prevent="addInput">
      <h3 class="form-title">Добавьте людей</h3>
      <div class="add-button-container">
        <v-btn
          class="add"
          type="submit">Добавить</v-btn>
      </div>
      <transition name="fade">
        <div v-if="showInputs" class="inputs-container">
          <div
            v-for="(input, index) in inputs" :key="index"
            class="input-container">

            <input
              class="input"
              type="text" placeholder="имя"
              v-model="input.value">

            <v-btn
              class="delete"
              @click="removeInput(index)">Удалить</v-btn>

          </div>
          <div v-if="inputs.length > 0" class="next-button-container">
            <v-btn
              to="/second"
              text @click="createPeople"
            >Далее</v-btn>
          </div>
        </div>
     </transition>
    </form>
  </div>
</template>

<script>
import { usePeopleStore } from '../router/counter';

export default {
  data() {
    return {
      inputs: [
        { value: '' }
      ],
      showInputs: false // Флаг для контроля отображения инпутов и кнопки "Далее"
    };
  },
  methods: {
    addInput() {
      this.inputs.push({ value: '' });
      this.showInputs = true; // Показываем инпуты и кнопку "Далее" после нажатия кнопки "Добавить"
    },
    removeInput(index) {
      this.inputs.splice(index, 1);
    },
    createPeople() {
      const peopleStore = usePeopleStore();
      const people = this.inputs.map(input => input.value).filter(value => value.trim() !== '');
      peopleStore.setPeople(people);
      this.$router.push('/second');
    }
  }
};
</script>

<style scoped>
.app {
  padding: 10px;
}
.form-title {
  margin-top: 10px;
  margin: 10px;
  text-align: center;
}


.add-button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.inputs-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
}

.input-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.input {
  width: 80%;
  border: 1px solid black;
  padding: 10px 15px;
  border-radius: 10px;
  margin-right: 10px;
}

.add {
  border: 1px solid black;
  border-radius: 10%;
  padding: 7px;
  width: 100px;
  height: auto;
}

.delete {
  border: 1px solid black;
  border-radius: 10%;
  padding: 7px;
  width: 100px;
  height: auto;
  margin-left: 10px;
}

.next-button-container {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.next {
  border: 1px solid black;
  border-radius: 10%;
  padding: 7px;
  width: 100px;
  height: auto;
}

/* Плавность анимации */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
