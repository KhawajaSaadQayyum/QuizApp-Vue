<script setup>
import { RouterLink, RouterView } from "vue-router";
import Quiz from "./components/Quiz.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <Quiz />
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
