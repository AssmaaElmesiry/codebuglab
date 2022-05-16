<script>
import headerStyle from '@/components/headerStyle.vue'
import AboutUsVue from './components/AboutUs.vue'

export default{
  components:{
    headerStyle,
    AboutUsVue,
  }
}
</script>

<template>
<main class="container mx-auto md:mx-auto py-2 pt-4 h-screen">
  <headerStyle/>
  <AboutUsVue/>
</main>
</template>

<style></style>
