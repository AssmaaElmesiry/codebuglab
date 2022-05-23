<script>
import headerStyle from '@/components/headerStyle.vue'
import AboutUsVue from './components/AboutUs.vue'
import NumCodebuglab from './components/NumCodebuglab.vue'
import PackagesVue from './components/Packages.vue'
import OutTechnologyVue from './components/OutTechnology.vue'
import OurTeamVue from './components/OurTeam.vue'

export default{
  components:{
    headerStyle,
    AboutUsVue,
    NumCodebuglab,
    PackagesVue,
    OutTechnologyVue,
    OurTeamVue,
  }
}
</script>

<template>
  <headerStyle/>
  <AboutUsVue/>
  <NumCodebuglab/>
  <PackagesVue/>
  <OutTechnologyVue/>
  <OurTeamVue/>
</template>

<style></style>
