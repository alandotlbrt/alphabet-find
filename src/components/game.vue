<template>
    <header class="game-header">
      <h1>Round : {{ victories }}</h1>
      <h1>Letters : {{ letter_succesful }}</h1>
      <router-link to="/">
        <button class="red-button">Leave</button>
      </router-link>
    </header>
    <div @click="focusInput">
      <input
        ref="hiddenInput"
        type="text"
        class="hidden-input"
        @input="handleInput"
        :maxlength=letter_lenght
      />
        <div class="text-typing-div" @click="focusInput">
            <div class="vertical">
                <div class="horizontal input-gap-right" v-if="direction=='left'">
                    <span class="input-cursor"></span>
                    <div class="word"> <span class="user-input">{{ userInput }}</span><span class="choosen-letter">{{ choosen_letter }}</span></div>
                </div>
                <div class="horizontal input-gap-left" v-if="direction=='right'">
                    <div class="word"> <span class="choosen-letter">{{ choosen_letter }}</span><span class="user-input">{{ userInput }}</span></div>
                    <span class="input-cursor"></span>
                </div>
                <h1 v-if="direction=='left'"><-</h1>
                <h1 v-else>-></h1>
                <h1>{{ letter_left }}</h1>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import game_methods from '../js/game/game'


  export default {
    data() {
      return {
        victories: 0,
        letter_succesful:0,
        game_data: null,
        choosen_letter:"",
        userInput: "", 
        final_string: "",
        letter_left: 0,
        direction:"",
        letter_lenght:0,
      };
    },
    methods: {
      handleInput(event) {
        const input = event.target.value.toUpperCase();
        if (!this.isLetter(input.slice(-1))) {return}
        if (this.direction=="left"){
            if (input.slice(-1) != this.game_data.list[this.game_data.list.length - this.userInput.length -1 ]){

              this.$router.push({ name: 'failur', query: { score: this.victories, letter_score : this.letter_succesful } });
            } else {
                this.userInput = input.split('').reverse().join('');
                this.letter_left = this.letter_left - 1
                this.letter_succesful++
                if (this.userInput == this.final_string){
                    this.victories++
                    event.target.value = ""
                    this.restartGame()
                }

            }
        } else {
          if (input.slice(-1) != this.game_data.list[input.length-1]){
            this.$router.push({ name: 'failur', query: { score: this.victories, letter_score : this.letter_succesful } });
          } else {
            this.userInput = input;
            this.letter_left = this.letter_left - 1;
            this.letter_succesful++
            if (this.userInput == this.final_string){
                this.victories++
                event.target.value = ""
                this.restartGame() 
            }
          }
        
        }   
      },
      focusInput() {
          this.$refs.hiddenInput.focus();
      },
      restartGame() {
        this.game_data = game_methods.random_game()
        this.userInput = "";
        this.letter_left = this.game_data.number;
        this.choosen_letter = this.game_data.letter;
        this.direction = this.game_data.direction;
        this.final_string = Object.keys(this.game_data.list).reduce((acc, key) => acc + this.game_data.list[key], '');
        this.letter_lenght = this.final_string.length;
        this.focusInput();
      },
      isLetter(str) {
        return str.length === 1 && str.match(/[a-z]/i);
      },
    },
    mounted() {

        this.game_data = game_methods.random_game()
        this.choosen_letter = this.game_data.letter, this.direction = this.game_data.direction, this.final_string = Object.keys(this.game_data.list).reduce((acc, key) => acc + this.game_data.list[key], ''),this.letter_left = this.game_data.number, this.letter_lenght = this.final_string.length
        this.focusInput(); 
    },
  };
  </script>

  
