
<template>

    <div class="title">
        <p id="arrow">ready?</p>
        <h1><span id="carousel">Alphabet</span><span class="input-cursor"></span>
      </h1>
    </div>
</template>

<script>  
</script>



<style scoped>
  .title{
    display:flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .title h1{
    animation: slideFadeIn 0.6s ease-out forwards;
    font-size:100px;
  }

  #arrow {
      animation: slideFadeIn 0.6s ease-out forwards;
      font-size: 2rem;
      display: inline-block;
      transition: transform 0.3s ease-in-out;
      color: white; 
  }

</style>
