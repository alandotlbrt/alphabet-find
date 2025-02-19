
<template>
    <header class="settings-header">
      <div class="horizontal">
        <span>Max range:</span>
        <input type="range" min="1" max="25" step="1" v-model="input_value">   
        <h3>{{input_value}}</h3>
        <span>Start by:</span>
        <div class="letter-click">

          <a @click="change_state($event)"class="clicable clicked">a</a>
          <a @click="change_state($event)"class="clicable clicked">b</a>
          <a @click="change_state($event)"class="clicable clicked">c</a>
          <a @click="change_state($event)"class="clicable clicked">d</a>
          <a @click="change_state($event)"class="clicable clicked">e</a>
          <a @click="change_state($event)"class="clicable clicked">f</a>
          <a @click="change_state($event)"class="clicable clicked">g</a>
          <a @click="change_state($event)"class="clicable clicked">h</a>
          <a @click="change_state($event)"class="clicable clicked">i</a>
          <a @click="change_state($event)"class="clicable clicked">j</a>
          <a @click="change_state($event)"class="clicable clicked">k</a>
          <a @click="change_state($event)"class="clicable clicked">l</a>
          <a @click="change_state($event)"class="clicable clicked">m</a>
          <a @click="change_state($event)"class="clicable clicked">n</a>
          <a @click="change_state($event)"class="clicable clicked">o</a>
          <a @click="change_state($event)"class="clicable clicked">p</a>
          <a @click="change_state($event)"class="clicable clicked">q</a>
          <a @click="change_state($event)"class="clicable clicked">r</a>
          <a @click="change_state($event)"class="clicable clicked">s</a>
          <a @click="change_state($event)"class="clicable clicked">t</a>
          <a @click="change_state($event)"class="clicable clicked">u</a>
          <a @click="change_state($event)"class="clicable clicked">v</a>
          <a @click="change_state($event)"class="clicable clicked">w</a>
          <a @click="change_state($event)"class="clicable clicked">x</a>
          <a @click="change_state($event)"class="clicable clicked">y</a>
          <a @click="change_state($event)"class="clicable clicked">z</a>
          <a @click="removeAllClicked"class="clicable red">off</a>
          <a @click="activeAllClicked"class="clicable green">on</a>
        </div>
          
     </div>
    </header>

    <div class="title">
        <h1><span class="title-text" id="carousel">A<span style="color: #4D764B;">l</span>p<span style="color: #744b76;">h</span>a<span style="color: #4D764B;">b</span>e<span style="color: #cc334c;">t</span>.</span><span class="input-cursor"></span></h1>
        <button @click="redirectionToPlay">Jouer</button>
    </div>
</template>



<script>
import { carousel } from '../js/caroussel.js';
export default{
  mounted(){
      carousel("#carousel");   
      
  },
  data(){
    return{
      alphabet_slice: 'abcdefghijklmnopqrstuvwxyz'.split(''),
      input_value: 25
    }
  },
  methods:{
    change_state(event) {
      const letter = event.target.textContent;
      if (event.target.classList.contains('clicked')) {
        event.target.classList.remove('clicked');
        this.alphabet_slice = this.alphabet_slice.filter(l => l !== letter);
      } else {
        event.target.classList.add('clicked');
        this.alphabet_slice.push(letter);
      }
    },
    removeAllClicked() {
      const clickables = document.querySelectorAll('.clicable');
      clickables.forEach(element => {
        element.classList.remove('clicked');
        this.alphabet_slice = this.alphabet_slice.filter(l => l !== element.textContent);
      });
    },
    activeAllClicked() {
      const clickables = document.querySelectorAll('.clicable');
      clickables.forEach(element => {
        if (!element.classList.contains('red') && !element.classList.contains('green')) {
          element.classList.add('clicked');
          this.alphabet_slice.push(element.textContent);
      
        }
      });
    },
    redirectionToPlay(){
      this.$router.push({ name: 'game', query: { alphabet_slice: this.alphabet_slice , input_value : this.input_value } });
    }
  }
}

</script>


<style >
  .title{
    gap: 5vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .title-text{
    animation: slideFadeIn 0.2s ease-out forwards;
    transition: color 0.3s linear;
    font-size:100px;
    margin-left: 22px;  
  }

  .placeholder{
    letter-spacing: 8px;
    transition: color 0.3s linear;
  }

  .appear{
    animation: slideFadeIn 0.6s ease-out forwards;
  }

  .success {
    animation: successEffect 0.6s ease-in-out;
    color: #2bca30;
    transform: scale(1.1);
  }

  .settings-header{

    display: flex;
    justify-content: center;
    align-items: center;
    height: 75px;
    gap: 2vw;
    padding: 10px;
  }

  .settings-header h3{
    font-size: 20px;
  }

  .settings-header span{
    color: white;
  }
  .settings-header .horizontal{
    gap: 10px;
  }

  .clicable{
    color: grey;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 10px;
    cursor: pointer;
    border: 1px solid;
    border-radius: 10px;
    text-decoration: none;
    transition: background-color 0.2s ease, color 0.2s ease;
}
.clicable.clicked {
    background-color: #4D764B;
    color: white;
}
.clicable.red:hover {
    background-color: #cc334c;
    color: white;
}
.clicable.green:hover {
    background-color: #4D764B;
    color: white;
}
.clicable:hover{
    filter: brightness(150%);
  }
  .letter-click{
    display: flex;
    gap: 7px;
  }





  @keyframes successEffect {
      0% { transform: scale(1); color: white; }
      50% { transform: scale(1.2) rotate(2deg); color: #2bca30 }
      100% { transform: scale(1.1); color: #2bca30 }
  }

</style>
