<script setup>
// import q from "./data/quizes.json"
import q from "../data/quizes.json"
import Card from "./Card.vue"
import {ref, watch} from "vue"
const search = ref("")
const quizes = ref(q)
watch(search,()=>{
    
    quizes.value = q.filter(item => item.name.toLowerCase().includes(search.value.toLowerCase()))

})

</script>

<template>

    <div class="main-container">
        <header>
            <h2>Quizes</h2>
            <input v-model.trim="search" type="text" placeholder="search...">
        </header>
        <div class="option-container">
            <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
            <!-- <div v-for="q in quizes" :key="q.id" class="card">
               
                    <img :src="q.img" alt="img">
              
                <div class="text-area">
                    <h2>{{ q.name }}</h2>
                    <p> {{ q.questions.length }} Quextions</p>
                </div>
            </div> -->
            
            
        </div>
    </div>
</template>

<style scoped>
header{
    display: flex; 
    margin-left: 30px;

}
input{
    margin-left: 10px;
    margin-top: 20px;
    height: 30px;
    border: none;
    background-color: rgba(106, 96, 96,0.1);
    padding-left:10px ;
}
.option-container{
    display: flex;
    margin: 10px;
}


</style>