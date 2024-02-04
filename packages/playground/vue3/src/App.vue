<script setup lang="ts">
import Hi from './Hi.vue'
import Welcome from './Welcome'
import logo from './assets/logo.jpeg'
</script>

<template>
  <div class="container">
    <div>
      <img :src="logo" class="logo" mode="" />
      <Hi />
      <Welcome />
      <!--  -->
      <!--  -->
      <!--  -->
      <p>Vite so awesome 🔥 .</p>
      <a href="https://github.com/YaroED/vite-plugin-strip">Give me a star if it helps you 💗 .</a>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.container
  width: 100vw
  height: 100vh
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  display: flex
  align-items: center
  justify-content: center
p
  font-size: 18px
  color: #35495d
  cursor: pointer

.logo
  width: 100px
  height: 100px
  margin: 0 auto
  display: block
  border-radius: 50%
</style>
