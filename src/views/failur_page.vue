<template>
    <div class="failur-body">
        <div class="center lost-game">  
            <div class="score-div">
                <span>Score: <span>{{ score }}</span></span><span class="sep-fail">|</span>
                <span>Total of letter: <span>{{ letter_succesful }}</span></span><span class="sep-fail">|</span>
                <span>Timer: <span>{{ timer }}</span></span> 
            </div>
            <h1>{{ failchat }}</h1>
            
            <div class="horizontal button-gap">
                <button class="replay-button"@click="redirectionToPlay">again</button>
                <router-link to="/">
                    <button class="no">stop</button>
                </router-link>
            </div>
        </div>
    </div>
    <audio id="fail_audio">
        <source src="../sounds/fail/wrong.ogg" type="audio/ogg">
        <source src="../sounds/fail/wrong.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>


</template>


<script>
import { random_failchat } from '../js/caroussel';
export default{
    data() {
        return {
            score: null,
            failchat : random_failchat(this.$route.query.score, this.$route.query.fail_message),
            letter_succesful: null,
            timer: this.$route.query.timer,
            params : {input_value: this.$route.query.input_value, alphabet_slice:this.$route.query.alphabet_slice, muted: this.$route.query.muted}
        };
    },
    created() {
        this.score = this.$route.query.score;
        this.letter_succesful = this.$route.query.letter_score;

    },
    methods:{
        redirectionToPlay(){
            this.$router.push({ name: 'game', query: { alphabet_slice: this.params.alphabet_slice , input_value : this.params.input_value } });
        },
        playsound(){
            if(localStorage.getItem('muted') == "true") {return}
            var x = document.getElementById('fail_audio');

            if (!x.paused) {
                x.pause();
                x.currentTime = 0;
                
            }

            x.play().catch(function(error) {
                console.error('Erreur de lecture du son:', error);
            });

      },
    },
    mounted(){
        this.playsound();
    }
}
</script>




