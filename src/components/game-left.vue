<template>
    <div class="input-container">
      <input
        type="text"
        class="minimal-input reversed"
        :value="displayText"
        @keydown="handleKey"
        ref="inputField"
      />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        userInput: "",
        fixedLetter: "F", 
        maxLetters: 5,
      };
    },
    computed: {

      displayText() {
        return this.userInput + this.fixedLetter;
      },
    },
    mounted() {
      this.$refs.inputField.focus();
      this.$refs.inputField.setSelectionRange(0, 0); 

    },
    methods: {
      handleKey(event) {
        const inputField = this.$refs.inputField;
  
        if (/^[a-zA-Z]$/.test(event.key) && this.userInput.length < this.maxLetters) {
            this.userInput = event.key.toUpperCase() + this.userInput; 
            event.preventDefault();
        } else if (event.key === "Backspace" && this.userInput.length > 0) {

            this.userInput = this.userInput.slice(1);
            event.preventDefault();
        } else {

            event.preventDefault();
        }

        this.$nextTick(() => {
          inputField.setSelectionRange(0, 0); 
        });
      },
    },
  };
  </script>