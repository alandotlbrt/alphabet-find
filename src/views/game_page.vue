<template>
    <count v-if="!count_finished"@count-completed="handleCountCompleted"/>
    <game2 v-if="count_finished"/>
</template>

<script>

import count from '../components/count.vue'
import game1 from '../components/game-right.vue'
import game2 from '../components/game-left.vue'
export default{
    components:{
        count,
        game1,
        game2
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