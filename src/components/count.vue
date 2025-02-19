<template>
    <div class="center div-count">
        <h1 class="text-count" id="count"></h1>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import { count_text } from '../js/game/count.js'
export default {
    setup(_, { emit }) { 
        onMounted(() => {
            count_text().then(() => {
                emit('count-completed', true); 
            });
        });
    }
};

</script>



<style>

.div-count{
    width: 200vw;
}

.text-count{
    font-size: 100px;
    transform-origin: center;
}

.text-count.animate{
    animation: countEffect 0.6s ease-in-out;
}


@keyframes countEffect {
    0% { transform: scale(1)}
    50% { transform: scale(1.3) rotate(2deg);}
    100% { transform: scale(1)}
  }

</style>