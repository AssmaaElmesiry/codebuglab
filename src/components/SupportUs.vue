<template>
    <sction>
        <titleStyleVue>
            How to support us
        </titleStyleVue>
        <div class="container mx-auto  md:px-12 px-8">
            <div class="flex md:flex-row flex-col">
                <div class="flex self-center md:w-1/2 w-full h-auto "><p class="text-Pcolor text-xl leading-loose">{{disc}}</p></div>
                <div class="flex justify-center md:w-1/2 w-full h-auto "><img :src="img" /></div>
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