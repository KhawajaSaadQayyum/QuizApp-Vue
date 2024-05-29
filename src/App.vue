<script setup>
import { RouterLink, RouterView } from "vue-router";

</script>

<template>
  
   <div class="container">
      <nav>
        <RouterLink to="/">Home |</RouterLink>
        <RouterLink to="/quiz"> Quiz </RouterLink>
      </nav>
    </div>
  <RouterView />
</template>

<style scoped>
.container{
  max-width: 1000px;
  margin: 0 auto;
}
</style>
