<template>
    <count v-if="!count_finished"@count-completed="handleCountCompleted"/>
    <game v-if="count_finished"/>
</template>

<script>

import count from '../components/count.vue'
import game from '../components/game.vue'
export default{
    components:{
        count,
        game,
    },
    data(){
        return{
            count_finished:false,
        }
    },
    methods: {
        handleCountCompleted(value) {
            this.count_finished = value
        }
    }
    

};

</script>