<template>
    <titleStyleVue>
        CodeBugLab in Numbers
    </titleStyleVue>
    <section class="Packages bg-Packages bg-no-repeat bg-cover w-full h-full relative before:!content-[''] before:!flex before:!absolute before:!w-full before:!h-full before:!bg-black before:!z-40">
        <div class="">
            <div class="container mx-auto z-50">
                <div class="py-16">
                    <ul class="flex justify-around relative z-[99]">
                        <li class="flex flex-col items-center justify-center text-white px-14 py-2 border rounded-md divide-solid border-white" v-for="item in packages" :key="item.id">
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
export default{
    data() {
        return {
            packages:[
                {
                    id:'1',
                    src: ('./src/assets/package.png'),
                    num: '4',
                    title: 'Package'
                },
                {
                    id:'2',
                    src: ('./src/assets/download.png'),
                    num: '344',
                    title: 'Download'
                },
                {
                    id:'3',
                    src: ('./src/assets/star.png'),
                    num: '57',
                    title: 'Stars'
                },
                {
                    id:'4',
                    src: ('./src/assets/fork.png'),
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
</style>