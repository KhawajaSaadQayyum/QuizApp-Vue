<script setup>

const props =defineProps(['quiz'])

</script>
<template>
  
    <div class="card">
               
               <img :src="quiz.img" alt="img">
         
           <div class="text-area">
               <h2>{{ quiz.name }}</h2>
               <p> {{ quiz.questions.length }} Quextions</p>
           </div>
       </div>

</template>

<style>
.card{
    margin-top: 30px;
    height: 300px;
    width: auto;
    margin-left: 30px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 35px;
    border-radius: 2%;
    overflow: hidden;
    cursor: pointer;
}
.card img {
    width: 100%;
    height: 200px;
    background-size: cover;
}
.text-area h2 {
    margin-left:10px ;
}
.text-area p {
    margin-left:10px ;
}
    

</style>