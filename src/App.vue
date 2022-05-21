<script>
import headerStyle from '@/components/headerStyle.vue'
import AboutUsVue from './components/AboutUs.vue'
import NumCodebuglab from './components/NumCodebuglab.vue'
import PackagesVue from './components/Packages.vue'

export default{
  components:{
    headerStyle,
    AboutUsVue,
    NumCodebuglab,
    PackagesVue,
  }
}
</script>

<template>
  <headerStyle/>
  <AboutUsVue/>
  <NumCodebuglab/>
  <PackagesVue/>
</template>

<style></style>
