<template>
    <div  @click="focusInput">

      <input
        ref="hiddenInput"
        type="text"
        v-model="tempInput"
        class="hidden-input"
        @input="handleInput"
      />
  
     
      <div class="text-typing-div">
        <span class="input-cursor"></span>
        <div class="word"> {{ userInput }}<span style='color: blue;'>F</span> </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tempInput: "", 
        userInput: "", 
      };
    },
    computed: {
        processedWord() {
            const reversed = this.userInput.split("").reverse().join("");
            return `${reversed.slice(1)}<span style='color: blue;'>F</span>`;
        },
    },
    methods: {
      handleInput(event) {
        const value = event.target.value;
        this.tempInput = value.toUpperCase();        
        this.userInput = this.tempInput;
      },
      focusInput() {
        this.$refs.hiddenInput.focus();
      },
    },
    mounted() {
      this.focusInput(); 
    },
  };
  </script>

  