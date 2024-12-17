<template>
    <div class="title">
      <h3>Добавьте позиции</h3>
      <div class="add-button-container">
        <v-btn class="add" type="button" @click="addInput">Добавить</v-btn>
      </div>
      <div v-if="showInputs" class="inputs-container">
        <div v-for="(input, index) in inputs" :key="index" class="input-container">
          <input
            class="input"
            type="text"
            placeholder="Наименование"
            v-model="input.name">
          <input
            class="input"
            type="text"
            placeholder="Цена"
            v-model="input.price"
            @keypress="filterPrice">
          
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        inputs: [],
        showInputs: false // Флаг для контроля отображения инпутов и кнопки "Далее"
      };
    },
    methods: {
      addInput() {
        this.inputs.push({ name: '', price: '' });
        this.showInputs = true; // Показываем инпуты и кнопку "Далее" после нажатия кнопки "Добавить"
      },

      filterPrice(event) {
        // Разрешаем только цифры и одну точку для десятичных значений
        const regex = /[0-9.]/;
        if (!regex.test(event.key)) {
          event.preventDefault();
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .title {
    margin-top: 10px;
    margin: 20px;
    text-align: center;
  }
  
  .add-button-container {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    margin: 10px;
  }
  
  .inputs-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
  }
  
  .input-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
  }
  
  .input {
    width: 20%;
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
  </style>
  