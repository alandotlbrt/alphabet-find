<template>
    <div class="input-container">
      <span class="choosen-letter">A</span>
      <input
        type="text"
        class="minimal-input"
        v-model="userInput"
        ref="inputField"
        @keydown="preventBackspace"
      />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userInput: "",
      };
    },
    mounted() {
      this.$refs.inputField.focus();
    },
    methods: {
      preventBackspace(event) {
        if (event.key === "Backspace" && this.userInput === "") {
          event.preventDefault();
        }
      },
    },
  };
  </script>
  