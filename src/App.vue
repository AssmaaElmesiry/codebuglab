<script>
import headerStyle from '@/components/headerStyle.vue'
import AboutUsVue from './components/AboutUs.vue'
import PackagesVue from './components/Packages.vue'

export default{
  components:{
    headerStyle,
    AboutUsVue,
    PackagesVue,
  }
}
</script>

<template>
<main class="">
  <headerStyle/>
  <AboutUsVue/>
  <PackagesVue/>
</main>
</template>

<style></style>
