<template>
    <section>
        <titleStyleVue>
            CodeBugLab in Numbers
        </titleStyleVue>
        <div class="NumCodebuglab bg-no-repeat bg-cover w-full h-full relative">
            <div class="container mx-auto px-12 z-50 ">
                <div class="py-16 flex justify-center">
                    <ul class="flex sm:flex-row flex-wrap justify-between content-center flex-col w-full relative z-[99]">
                        <li class="flex flex-col items-center justify-center  text-white px-14 m-5 sm:w-52 w-full py-2 border rounded-md divide-solid border-white" v-for="item in packages" :key="item.id">
                            <img :src="item.src" alt="packages" />
                            <span class="text-5xl p-1 font-bold">{{item.num}}</span>
                            <p class="text-2xl">{{item.title}}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import titleStyleVue from "./titleStyle.vue";
import packages from "../assets/package.png";
import download from "../assets/download.png";
import star from "../assets/star.png";
import fork from "../assets/fork.png";
export default{
    data() {
        return {
            packages:[
                {
                    id:'1',
                    src: packages,
                    num: '4',
                    title: 'Package'
                },
                {
                    id:'2',
                    src: download,
                    num: '344',
                    title: 'Download'
                },
                {
                    id:'3',
                    src: star,
                    num: '57',
                    title: 'Stars'
                },
                {
                    id:'4',
                    src: fork,
                    num: '9',
                    title: 'Fork'
                },
            ]
        }
    },
    components:{
        titleStyleVue,
    }
}
</script>
<style>
/* .Packages::before{
    content: "" !important;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #4EB8F4B8;
} */
.NumCodebuglab{
    background-image: linear-gradient(to bottom, rgba(78, 184, 244, 0) 0%, rgba(78, 184, 244, 1) 75%)
}
</style>