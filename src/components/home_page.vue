
<template>

    <div class="title">
        <p class="arrow" id="arrow">example</p>
        <h1><span class="title-text" id="carousel">Alphabet</span><span class="input-cursor"></span>
      </h1>
    </div>
</template>

<script>  
</script>



<style >
  .title{
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
  }

  .arrow {
    min-height: 40px;
    animation: slideFadeIn 0.6s ease-out forwards;
    font-size: 2rem;
    display: inline-block;
    color: white;
    transition: transform 0.3s ease, color 0.3s ease;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .appear{
    animation: slideFadeIn 0.6s ease-out forwards;
  }

  .success {
    animation: successEffect 0.6s ease-in-out;
    color: #2bca30;
    transform: scale(1.1);
  }

    @keyframes successEffect {
      0% { transform: scale(1); color: white; }
      50% { transform: scale(1.2) rotate(2deg); color: #2bca30 }
      100% { transform: scale(1.1); color: #2bca30 }
  }

</style>
