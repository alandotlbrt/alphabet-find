<template>
    <count v-if="!count_finished"@count-completed="handleCountCompleted"/>
    <game2 :game_data="game_data" v-if="count_finished && game_data.direction == 'left'"/>
    <game1 v-if="count_finished && game_data.direction == 'right'"/>
</template>

<script>

import count from '../components/count.vue'
import game1 from '../components/game-right.vue'
import game2 from '../components/game-left.vue'
import game_methods from '../js/game/game.js'


export default{
    components:{
        count,
        game1,
        game2
    },
    data(){
        return{
            count_finished:false,
            game_data:null,
        }
    },
    methods: {
        handleCountCompleted(value) {
            this.game_data = game_methods.random_game()
            this.count_finished = value
        }
    }
    

};

</script>