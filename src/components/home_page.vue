
<template>

    <div class="title">
        <h1><span class="title-text" id="carousel">A<span style="color: #4D764B;">l</span>p<span style="color: #744b76;">h</span>a<span style="color: #4D764B;">b</span>e<span style="color: #cc334c;">t</span>.</span><span class="input-cursor"></span>
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
    margin-left: 25px;
  
  }

  .title-text{
    animation: slideFadeIn 0.2s ease-out forwards;
    transition: color 0.3s linear;
    font-size:100px;
  }
  .placeholder{
    letter-spacing: 8px;
    transition: color 0.3s linear;
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
