
<template>
    <header class="settings-header">
      <div class="horizontal">
        <span>Max range:</span>
        <span id="input_value"class="input_value">{{ input_value }}</span>
        <input class="range_max"type="range" min="1" max="25" step="1" v-model="input_value">   
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
        <svg  @click="toggleMuted" class="svg_sound " fill="#white" width="25px" height="25px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 522.234 522.234" xml:space="preserve" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="10.444680000000002"></g><g id="SVGRepo_iconCarrier"><g><g><g><path d="M346.35,41.163c-10.855-10.367-25.076-16.078-40.045-16.078c-10.832,0-21.445,3.063-30.689,8.857l-159.161,99.761H58.354 c-31.9,0-57.854,25.952-57.854,57.853v138.918c0,31.9,25.953,57.854,57.854,57.854h57.773l159.487,99.965 c9.244,5.795,19.857,8.857,30.691,8.857c14.969,0,29.189-5.71,40.047-16.078c5.543-5.293,9.908-11.525,12.979-18.523 c3.227-7.353,4.861-15.184,4.861-23.275V261.22v-0.205V82.963c0-8.094-1.635-15.925-4.861-23.278 C356.26,52.689,351.893,46.457,346.35,41.163z M321.354,261.015v0.205v178.052c0,8.803-7.227,15.037-15.049,15.037 c-2.664,0-5.398-0.724-7.939-2.316L137.222,350.989c-5.736-3.595-12.368-5.502-19.138-5.502h-59.73 c-8.292,0-15.014-6.722-15.014-15.014V191.556c0-8.291,6.722-15.013,15.014-15.013h60.059c6.77,0,13.4-1.907,19.137-5.502 L298.365,70.242c2.541-1.593,5.273-2.316,7.939-2.316c7.822,0,15.049,6.236,15.049,15.038V261.015z"></path><path d="M306.305,497.649c-10.929,0-21.634-3.089-30.957-8.934l-159.365-99.889H58.354C26.177,388.827,0,362.649,0,330.474 V191.556c0-32.176,26.177-58.353,58.354-58.353h57.958L275.35,33.519c9.325-5.844,20.029-8.934,30.955-8.934 c15.096,0,29.44,5.759,40.391,16.216c5.591,5.34,9.995,11.625,13.093,18.683c3.254,7.415,4.903,15.314,4.903,23.479v356.309 c0,8.163-1.649,16.062-4.903,23.477c-3.099,7.062-7.503,13.348-13.091,18.684C335.746,491.891,321.401,497.649,306.305,497.649z M58.354,134.203C26.729,134.203,1,159.931,1,191.556v138.918c0,31.625,25.729,57.354,57.354,57.354h57.917l0.122,0.076 l159.487,99.965c9.164,5.745,19.685,8.781,30.426,8.781c14.838,0,28.938-5.661,39.701-15.939 c5.493-5.245,9.821-11.423,12.866-18.363c3.198-7.287,4.819-15.05,4.819-23.074V82.963c0-8.025-1.621-15.79-4.819-23.077 c-3.044-6.937-7.373-13.114-12.868-18.362c-10.763-10.279-24.861-15.939-39.699-15.939c-10.738,0-21.259,3.037-30.424,8.781 l-159.283,99.837H58.354z M306.305,454.809c-2.87,0-5.708-0.827-8.205-2.393L136.956,351.413 c-5.664-3.55-12.189-5.426-18.872-5.426h-59.73c-8.554,0-15.514-6.959-15.514-15.514V191.556c0-8.554,6.959-15.513,15.514-15.513 h60.059c6.682,0,13.207-1.876,18.871-5.426L298.1,69.818c2.497-1.565,5.335-2.393,8.205-2.393c8.573,0,15.549,6.97,15.549,15.538 v356.308C321.854,447.839,314.878,454.809,306.305,454.809z M58.354,177.043c-8.003,0-14.514,6.51-14.514,14.513v138.918 c0,8.003,6.511,14.514,14.514,14.514h59.73c6.871,0,13.58,1.929,19.403,5.578l161.144,101.003c2.338,1.466,4.991,2.24,7.674,2.24 c8.022,0,14.549-6.521,14.549-14.537V82.963c0-8.016-6.526-14.538-14.549-14.538c-2.683,0-5.336,0.774-7.674,2.24 L137.814,171.465c-5.824,3.649-12.533,5.578-19.402,5.578H58.354z"></path></g><g><path d="M424.273,156.536c-5.266-10.594-18.125-14.911-28.715-9.646c-10.594,5.266-14.912,18.123-9.646,28.716 c12.426,24.995,18.992,54.604,18.992,85.626c0,31.506-6.754,61.487-19.533,86.705c-5.348,10.553-1.129,23.442,9.424,28.79 c3.104,1.572,6.408,2.317,9.664,2.317c7.816,0,15.35-4.294,19.125-11.742c15.807-31.191,24.16-67.869,24.16-106.07 C447.746,223.628,439.629,187.424,424.273,156.536z"></path><path d="M404.459,379.545c-3.456,0-6.784-0.798-9.89-2.371c-10.782-5.464-15.108-18.681-9.645-29.462 c12.744-25.147,19.479-55.052,19.479-86.479c0-30.948-6.549-60.48-18.939-85.404c-2.606-5.243-3.016-11.188-1.15-16.738 c1.864-5.55,5.778-10.042,11.021-12.648c3.064-1.523,6.341-2.296,9.739-2.296c8.388,0,15.916,4.662,19.646,12.167 c15.391,30.959,23.524,67.239,23.522,104.919c0,38.28-8.373,75.037-24.214,106.296 C420.273,374.94,412.773,379.545,404.459,379.545z M405.075,145.146c-3.242,0-6.369,0.737-9.294,2.191 c-5.004,2.487-8.74,6.774-10.52,12.071c-1.779,5.297-1.39,10.97,1.098,15.974c12.459,25.062,19.045,54.748,19.045,85.849 c0,31.584-6.773,61.645-19.587,86.931c-5.215,10.29-1.086,22.904,9.203,28.118c2.965,1.502,6.141,2.264,9.438,2.264 c7.936,0,15.094-4.395,18.679-11.468c15.771-31.12,24.106-67.721,24.106-105.845c0.002-37.526-8.096-73.652-23.418-104.474 C420.266,149.596,413.081,145.146,405.075,145.146z"></path></g><g><path d="M456.547,88.245c-10.594,5.266-14.912,18.122-9.646,28.716c20.932,42.105,31.994,91.864,31.994,143.897 c0,52.847-11.381,103.237-32.912,145.727c-5.348,10.552-1.129,23.441,9.424,28.788c3.104,1.573,6.408,2.318,9.666,2.318 c7.814,0,15.35-4.294,19.123-11.743c24.559-48.462,37.539-105.549,37.539-165.09c0-58.615-12.611-114.968-36.473-162.968 C479.996,87.297,467.141,82.977,456.547,88.245z"></path><path d="M465.072,438.19c-3.458,0-6.787-0.798-9.893-2.372c-5.223-2.646-9.102-7.168-10.923-12.732s-1.367-11.506,1.279-16.728 c21.496-42.42,32.858-92.733,32.858-145.501c0-51.958-11.045-101.64-31.941-143.674c-5.381-10.824-0.952-24.006,9.871-29.386 c3.065-1.524,6.343-2.297,9.742-2.297c8.386,0,15.912,4.663,19.643,12.167c23.896,48.067,36.525,104.498,36.525,163.19 c0,59.619-12.999,116.785-37.593,165.315C480.887,433.586,473.388,438.19,465.072,438.19z M466.066,86.5 c-3.243,0-6.371,0.738-9.297,2.193c-5.004,2.487-8.74,6.774-10.52,12.071s-1.389,10.97,1.098,15.974 c20.966,42.172,32.047,92.008,32.047,144.12c0,52.924-11.399,103.394-32.966,145.952c-2.526,4.984-2.96,10.654-1.222,15.965 s5.44,9.626,10.425,12.151c2.965,1.503,6.141,2.265,9.44,2.265c7.937,0,15.094-4.395,18.677-11.469 c24.523-48.392,37.485-105.401,37.485-164.864c0-58.54-12.594-114.816-36.42-162.745C481.253,90.949,474.069,86.5,466.066,86.5z"></path></g></g> </g><line v-if="muted" x1="50" y1="50" x2="450" y2="450" stroke="red" stroke-width="10"/></g></svg>
      </div>
      <div class="horizontal">
        <span>Timer per round : </span>
        <a @click="change_timer($event)" class="clicable clicked time"> none </a>
        <a @click="change_timer($event)" class="clicable time"> 5s </a>
        <a @click="change_timer($event)" class="clicable time"> 10s </a>
        <a @click="change_timer($event)" class="clicable time"> 15s </a>
      </div>
    </header>
    <div class="title">
        <h1><span class="title-text" id="carousel">A<span style="color: #4D764B;">l</span>p<span style="color: #744b76;">h</span>a<span style="color: #4D764B;">b</span>e<span style="color: #cc334c;">t</span>.</span><span class="input-cursor"></span></h1>
        <button @click="redirectionToPlay">Play</button>
        <span v-if="error_show" class="error">please select at least one letter</span>
      </div>
      
  
      
</template>



<script>
import { carousel } from '../js/caroussel.js';


export default{
  mounted(){  
      carousel("#carousel");   
      const cat = localStorage.getItem("myCat");
      localStorage.setItem("myCat", "Tom");
      
  },
  data(){
    return{
      alphabet_slice: 'abcdefghijklmnopqrstuvwxyz'.split(''),
      input_value: 25,
      error_show: false,
      muted: false,
      timer:0,
    }
  },
  methods:{
    change_state(event) {
      const letter = event.target.textContent;
      if (event.target.classList.contains('clicked')) {
        event.target.classList.remove('clicked');
        this.alphabet_slice = this.alphabet_slice.filter(l => l !== letter);
      } else {
        this.error_show = false
        event.target.classList.add('clicked');
        this.alphabet_slice.push(letter);
      }
    },
    change_timer(event){
      const timer = event.target.textContent;
      const clickables = document.querySelectorAll('.time');
      clickables.forEach(element => {
        element.classList.remove('clicked');
      })
      event.target.classList.add('clicked');
      this.timer = timer.slice(0,-2)
      localStorage.setItem("timer", this.timer)
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
      const clickables = document.querySelectorAll('.clicked');
      if (clickables.length > 0){
        this.$router.push({ name: 'game', query: { alphabet_slice: this.alphabet_slice , input_value : this.input_value, muted : this.muted } });
      } else {
        this.error_show = true
      }
    },
    toggleMuted(){
      this.muted = !this.muted
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 75px;
    margin-top: 1.5vh;
    padding: 1vh;
    gap: 2vh;
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

.clicable.clicked.time{
  background-color: #744b76;
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
  .range_max{
    cursor: pointer;
  }
  .input_value{
    font-weight: 1000;
  }

  .error{
    margin-top: -30px;
    color: #cc334c;
  }
  .svg_sound{
    cursor: pointer;
    transition: .3s;
  }

  .svg_sound:hover{
    transform: scale(1.2);
    transition: .3s;

}



  @keyframes successEffect {
      0% { transform: scale(1); color: white; }
      50% { transform: scale(1.2) rotate(2deg); color: #2bca30 }
      100% { transform: scale(1.1); color: #2bca30 }
  }

</style>
