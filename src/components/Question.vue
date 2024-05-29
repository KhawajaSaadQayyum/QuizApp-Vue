<script setup>
import questionData from "../data/quizes.json"
import { ref } from "vue";
const questionBank= ref(questionData)
</script>


<template>
   
      <div class="question-container">
                <h1 class="question">
                  Qauestion  {{ questionBank }}
                </h1>
            </div>
            <div class="option-container">
                <div class="option">
                    <p class="option-label">A.</p>
                    <div class="option-value">
                        <p>Saad Qayyum</p>
                    </div>
                    
                </div> <div class="option">
                    <p class="option-label">B.</p>
                    <div class="option-value">
                        <p>Husnain Qayyum</p>
                    </div>
                    
                </div> <div class="option">
                    <p class="option-label">C.</p>
                    <div class="option-value">
                        <p>Tariq Qayyum</p>
                    </div>
                    
                </div> <div class="option">
                    <p class="option-label">D.</p>
                    <div class="option-value">
                        <p>Tahir Qayyum</p>
                    </div>
                    
                </div>
            </div>
</template>

<style>
.question-container{
    margin-top: 20px;
    margin-left: 20px;
}
.option{
    display: flex;
}
.option-value{
    margin-left: 20px;
}
.option-label{
    margin-left: 20px;
   
}

</style>