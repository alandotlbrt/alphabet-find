<template>
    <!-- <header class="loose-header">
        <h3>game over</h3>
    </header> -->
    <div class="center lost-game">  
        <div class="score-div">
            <span>Score: <span>{{ score }}</span></span>|
            <span>Total of letter: <span>{{ letter_succesful }}</span></span> |
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
            failchat : random_failchat(this.$route.query.score),
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
            console.log(this.params.muted)
            if(this.params.muted){return}
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

<style>

.loose-header{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75px;
    margin-top: 75px;
    font-size: 200px;
}


.loose-header h3{
    font-size: 120px;
    color:#cc334c;
}

.lost-game{
    width: 100vw;
}


.red-score{
    color: #cc334c;
}

.lost-game h1{
    font-weight: 650;
    font-size: 75px;
    margin-bottom: 0.7vh;
    margin-top: 0.7vh;

}

.span-score{
    color:#4D764B; 
}

.retry{
    color: rgb(218, 218, 218);
    font-size: 2vh;
    font-style: italic;
    margin-bottom: -3px;
    margin-left: 10px;
    
}

.lost-game h2{
    font-size: 50px;    
    font-weight:560;
    color: rgb(172, 172, 172);
}

.lost-game h3{
    color: #cc334c;
}

.lost-game button{
    margin-top: 0.5vh;
}


.button-gap{
    gap: 10px;
}

.lost-game button.no{
    background-color: #cc334c;
}

.replay-button{
    background-color: #4D764B;
}
.score-div{
    
    color: white;
    display: flex;
    gap: 10px;
    font-size: 3vh;
    margin-bottom: -1vh;
}

</style>


