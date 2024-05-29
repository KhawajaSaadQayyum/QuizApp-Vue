<template>
    <div>
        <header>
            <h4>Question 1/3</h4>
            <div class="bar">
                <div class="completion">

                </div>
            </div>
        </header>
        <div>
          <Question/>
        </div>
    </div>
</template>
<script setup>
import Question from "../components/Question.vue"
</script>
<style>
header{
    margin-top: 20px;
    margin-left: 20px;
}
header h4{
    font-size: 30px;
}
.bar{
    width: 300px;
    height: 40px;
    border: 3px solid gray;
}
.completion{
background-color: gray;
height: 100%;
width: 66%;

}

</style>