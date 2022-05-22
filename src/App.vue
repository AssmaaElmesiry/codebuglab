<script>
import headerStyle from '@/components/headerStyle.vue'
import AboutUsVue from './components/AboutUs.vue'
import NumCodebuglab from './components/NumCodebuglab.vue'
import PackagesVue from './components/Packages.vue'
import OutTechnologyVue from './components/OutTechnology.vue'

export default{
  components:{
    headerStyle,
    AboutUsVue,
    NumCodebuglab,
    PackagesVue,
    OutTechnologyVue,
  }
}
</script>

<template>
  <headerStyle/>
  <AboutUsVue/>
  <NumCodebuglab/>
  <PackagesVue/>
  <OutTechnologyVue/>
</template>

<style></style>
