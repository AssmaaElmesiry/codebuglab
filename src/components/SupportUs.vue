<template>
    <sction id="Supportus">
        <titleStyleVue>
            How to support us
        </titleStyleVue>
        <div class="container mx-auto  md:px-12 px-8">
            <div class="flex md:flex-row flex-col mb-32">
                <div class="flex self-center md:w-1/2 w-full h-auto "><p class="text-Pcolor text-xl leading-loose">{{disc}}</p></div>
                <div class="flex justify-center md:w-1/2 w-full h-auto bellImg "><img :src="img" alt="support us"/></div>
            </div>
        </div>
    </sction>
</template>
<script>
    import titleStyleVue from "./titleStyle.vue";
    export default{
        components:{
            titleStyleVue,
        },
        data() {
            return {
                disc: 'Most of our packages are free to use, if you like our work share our packages with your colleagues and coworkers, you can subscribe to our newsletter so we can reach to you with all new packages and updates.',
                img: ('./src/assets/share.png'),
            }
        },
    }
</script>
<style>
.bellImg {
  -webkit-animation-name: rotate;
  animation-delay: 8s;
  -webkit-animation-duration: 5s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-direction: normal;
  -webkit-transform-origin: 50% 0%;
  -webkit-animation-timing-function: linear;  /* or make your custom easing */
}
@-webkit-keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(20deg);
  }
  75% {
    -webkit-transform: rotate(-20deg);
  }
  100% {
    -webkit-transform: rotate(0deg);
  }
}
</style>