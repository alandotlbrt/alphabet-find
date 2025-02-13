<template>
    <div @click="focusInput">

      <input
        ref="hiddenInput"
        type="text"
        class="hidden-input"
        @input="handleInput"
      />
        <div class="text-typing-div" @click="focusInput">
            <div class="vertical">
                <div class="horizontal" v-if="direction=='left'">
                    <span class="input-cursor"></span>
                    <div class="word"> {{ userInput }}<span class="choosen-letter">{{ choosen_letter }}</span> </div>
                </div>
                <div class="horizontal" v-if="direction=='right'">
                    <h1>hi</h1>
                </div>
                <h1><-</h1>
                <h1>{{ letter_left }}</h1>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    props:{
        game_data:Object,
    },
    data() {
      return {
        choosen_letter:"",
        userInput: "", 
        final_string: "",
        letter_left: 0,
        direction:"",
      };
    },
    methods: {
      handleInput(event) {
        const input = event.target.value.toUpperCase();
        
        console.log(input, this.userInput)
        if (input.slice(-1) != this.game_data.list[this.game_data.list.length - this.userInput.length -1 ]){
            this.$router.push('/failur')
        } else {
            this.userInput = input.split('').reverse().join('').toUpperCase();
            this.letter_left = this.letter_left - 1
            if (this.userInput == this.final_string){
                console.log("gagné", this.userInput )
            }

        } 
       
      },
    focusInput() {
        this.$refs.hiddenInput.focus();
    },

    },
    mounted() {
        this.choosen_letter = this.game_data.letter
        this.direction = this.game_data.direction
        console.log(this.game_data.list, this.game_data.number, this.game_data.letter),
        this.final_string = Object.keys(this.game_data.list).reduce((acc, key) => acc + this.game_data.list[key], '');
        this.letter_left = this.game_data.number
      this.focusInput(); 
    },
  };
  </script>

  