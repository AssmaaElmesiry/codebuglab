<template>
    <section id="OutTechnology">
        <titleStyleVue>
            OUR TECHNOLOGY STACK
        </titleStyleVue>
        <div class="container md:mx-auto md:px-12 px-8 sm:pt-0 pt-12">
            <div class=" sm:h-HSection  h-HSectionSm flex justify-between items-center">
                <ul class="flex md:justify-between justify-center items-end flex-wrap w-full relative">
                    <div class="max-w-full w-72 mb-8 relative">
                        <div class="xl:absolute xl:-top-72 w-full md:relative md:-top-1">
                            <ul class="flex xl:justify-between md:justify-center flex-wrap bg-gray p-4">
                                <li v-for="item in frontEnd" :key="item" class="flex w-1/2 py-3">
                                    <img :src="item.logo" class="w-auto h-max" alt="logo"/>
                                    <p class="text-sm pl-1">{{item.name}}</p>
                                </li>
                            </ul>
                        </div>
                        <li class="text-center border rounded-md px-12 py-4 mt-6 bg-blue text-white font-bold text-4xl relative">
                            Front End
                            <div class="absolute -top-5 -translate-y-2/4 left-1/2  w-0 h-0 border-solid Triangle"></div>
                        </li>
                    </div>
                    <div class="max-w-full w-72 mb-8 relative">
                        <div class="xl:absolute xl:-bottom-28 w-full md:relative md:bottom-1">
                            <ul class="flex justify-between flex-wrap bg-gray p-4">
                                <li v-for="item in backEnd" :key="item" class="flex w-1/2 py-3">
                                    <img class="w-auto h-[fit-content]" :src="item.logo"  alt="logo" />
                                    <p class="text-sm pl-1">{{item.name}}</p>
                                </li>
                            </ul>
                        </div>
                        <li class="border rounded-md px-12 py-4 mt-6 bg-blue text-white font-bold text-4xl relative">
                            Back End
                            <div class="absolute xl:-bottom-5 bottom-20 -translate-y-2/4 left-1/2  w-0 h-0 border-solid Triangle"></div>
                        </li>
                    </div>
                    <div class="max-w-full w-72 mb-8 relative">
                        <div class="xl:absolute xl:-top-24 w-full md:relative md:-top-1">
                            <ul class="flex justify-between flex-wrap bg-gray p-4">
                                <li v-for="item in Database" :key="item" class="flex w-1/2 py-3">
                                    <img :src="item.logo" class="w-auto h-fit" alt="logo" />
                                    <p class="text-sm pl-1">{{item.name}}</p>
                                </li>
                            </ul>
                        </div>
                        <li class="border rounded-md px-12 py-4 mt-6 bg-blue text-white font-bold text-4xl relative">
                            Database
                            <div class="absolute -top-5 -translate-y-2/4 left-1/2  w-0 h-0 border-solid Triangle"></div>
                        </li>
                    </div>
                    <div class="max-w-full w-72 mb-8 relative">
                        <div class="xl:absolute xl:-bottom-28 w-full md:relative md:bottom-1">
                            <ul class="flex justify-between flex-wrap bg-gray p-4">
                                <li v-for="item in Others" :key="item" class="flex w-1/2 py-3">
                                    <img :src="item.logo" class="w-auto h-fit" alt="logo" />
                                    <p class="text-sm pl-1">{{item.name}}</p>
                                </li>
                            </ul>
                        </div>
                        <li class="border rounded-md px-12 py-4 mt-6 bg-blue text-white font-bold text-4xl relative">
                            Others
                            <div class="absolute xl:-bottom-5 bottom-20 -translate-y-2/4 left-1/2  w-0 h-0 border-solid Triangle"></div>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    </section>
</template>
<script>
    import titleStyleVue from "./titleStyle.vue";
    import html5 from "../assets/html5.png";
    import css3 from '../assets/css3.png';
    import bootstrap from "../assets/bootstrap.png";
    import javascript from "../assets/javascript.png";
    import jquery from "../assets/jquery.png";
    import nodejs from "../assets/nodejs.png";
    import sass from "../assets/sass.png";
    import Vuejs from "../assets/Vuejs.png";
    import emmet from "../assets/emmet.png";
    import php from "../assets/php.png";
    import MySQL from "../assets/MySQL.png";
    import laravel from "../assets/laravel.png"
    import webpack from "../assets/webpack.png";
    import Photoshop from "../assets/Photoshop.png";

    export default{
        components:{
            titleStyleVue,
        },
        data() {
            return {
                frontEnd:[
                    {
                        logo: html5,
                        name: 'html5',
                    },
                    {   
                        logo: css3,
                        name: 'css3',
                    },
                    {
                        logo: bootstrap,
                        name: 'bootstrap'    
                    },
                    {
                        logo: javascript,
                        name: 'javascript'    
                    },
                    {
                        logo: jquery,
                        name: 'jquery'    
                    },
                    {
                        logo: nodejs,
                        name: 'nodejs'    
                    },
                    {
                        logo: sass,
                        name: 'sass'    
                    },
                    {
                        logo: Vuejs,
                        name: 'Vuejs'    
                    },
                    {
                        logo: emmet,
                        name: 'emmet'    
                    } 
                ],
                backEnd:[
                    {
                        logo: php,
                        name: 'php',
                    },
                    {   
                        logo: laravel,
                        name: 'laravel',
                    },
                ],
                Database:[
                    {
                        logo: MySQL,
                        name: 'MySQL',
                    },
                ],
                Others:[
                    {
                        logo: webpack,
                        name: 'webpack',
                    },
                    {   
                        logo: Photoshop,
                        name: 'Photoshop',
                    },
                ],
            }
        },
    }
</script>
<style>
.Triangle{
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 15px solid #4EB8F4;
    transform: translate(-50%);
}
</style>