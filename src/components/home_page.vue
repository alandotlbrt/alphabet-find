
<template>

    <div class="title">
        <h1><span class="title-text" id="carousel">A<span style="color: #4D764B;">l</span>p<span style="color: #744b76;">h</span>a<span style="color: #4D764B;">b</span>e<span style="color: #cc334c;">t</span>.</span><span class="input-cursor"></span></h1>
        <button>Play</button>
    </div>
</template>

<script>  
</script>



<style >
  .title{
    gap: 5vh;
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
    margin-left: 18px;
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

  button{
    cursor: pointer;
    border-radius: 50px;
    color: white;
    background-color: #744b76;
    border: none;
    font-size: 2.5vh;
    width: 6vw;
    height: 5vh;
    transition-duration: 0.2s;

  }
  button:hover{
    filter: brightness(150%);
  }

    @keyframes successEffect {
      0% { transform: scale(1); color: white; }
      50% { transform: scale(1.2) rotate(2deg); color: #2bca30 }
      100% { transform: scale(1.1); color: #2bca30 }
  }

</style>
