<template>
    <count v-if="!count_finished"@count-completed="handleCountCompleted"/>
    <game :params="params" v-if="count_finished"/>
</template>

<script>

import count from '../components/count.vue'
import game from '../components/game.vue'



export default{
    components:{
        count,
        game
    },
    data(){
        return{
            count_finished:false,
            params : {input_value: this.$route.query.input_value, alphabet_slice:this.$route.query.alphabet_slice, muted: this.$route.query.muted}
        }
    },
    methods: {
        handleCountCompleted(value) {
            this.count_finished = value
        }
    }
    

};

</script>