<template>
    <div class="center lost-game">
        <div class="horizontal">
            <h3>Score: <span class="span-score">{{ score }}&nbsp;</span></h3>
            <h3> Letters: <span class="span-score">{{ letter_succesful }}&nbsp;</span></h3>

        </div>
        <h1>You <span style="color: #cc334c;">lost</span>..</h1>
        <h2> wana replay ? </h2>
        <div class="horizontal button-gap">
            <button @click="redirectionToPlay">yes</button>
            <router-link to="/">
                <button class="no">no</button>
            </router-link>
        </div>
       
    </div>
</template>


<script>
export default{
    data() {
        return {
            score: null,
            letter_succesful: null,
            params : {input_value: this.$route.query.input_value, alphabet_slice:this.$route.query.alphabet_slice}
        };
    },
    created() {
        this.score = this.$route.query.score;
        this.letter_succesful = this.$route.query.letter_score;

    },
    methods:{
        redirectionToPlay(){
            console.log(this.params.alphabet_slice)
            this.$router.push({ name: 'game', query: { alphabet_slice: this.params.alphabet_slice , input_value : this.params.input_value } });
        }
    }
}
</script>

<style>

.lost-game h1{
    font-size: 75px;
}

.span-score{
    color:#4D764B; 
}

.lost-game h2{
    font-size: 50px;    
    font-weight:560;
    color: rgb(172, 172, 172);
}

.lost-game h3{
    font-style: italic;
    font-weight: normal;
}

.lost-game button{
    margin-top: 2vh;
}


.button-gap{
    gap: 10px;
}

.lost-game button.no{
    background-color: #cc334c;
}

</style>


