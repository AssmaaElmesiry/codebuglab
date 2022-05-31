<template>
    <section id="Packages">
        <titleStyleVue>
            Latest packages
        </titleStyleVue>
        <div class="container md:mx-auto md:px-12 px-8">
            <ul class="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-3">
                <li v-for=" item in packages" :key="item" class="relative group text-white mb-5 w-full h-full overflow-hidden">
                    <img :src="item.images" alt="package" class="w-full h-full"/>
                    <div class="test p-5 absolute bottom-0 left-0 right-0 overflow-hidden h-2/5 w-full ease-in duration-300 bg-gradient-to-b from-colorfrom to-colorto group-hover:h-full">
                        <div class="test2 left-0 px-5 group-hover:absolute group-hover:top-1/3 ">
                            <h2 class="text-3xl py-8"> {{item.Packages_Name}} </h2>
                            <div class="item ease-in duration-300 ">
                                <p class="w-4/5 text-base pb-5"> {{item.details}} </p>
                                <div class="flex flex-col">
                                    <span class="text-sm py-1"> Tag •  {{item.tag}} </span>
                                    <div class="flex sm:flex-row flex-col justify-between">
                                        <div class="flex w-1/2 sm:mb-0 mb-2">
                                            <span class="text-sm flex items-center px-1"> {{item.download}} <img class="w-full h-auto pl-2" :src="item.downloadIcon" alt="download"/> </span>
                                            <span class="text-sm flex items-center px-1"> {{item.star}} <img class="w-full h-auto pl-2" :src="item.starIcon" alt="star"/></span>
                                        </div>
                                        <DownloadVue/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>            
        </div>
        <AllPackages/>
    </section>
</template>
<script>
    import titleStyleVue from "./titleStyle.vue";
    import DownloadVue from "./buttons/Download.vue";
    import AllPackages from '@/components/buttons/AllPackages.vue';
    export default{
        components:{
            titleStyleVue,
            DownloadVue,
            AllPackages,
        },
        data() {
            return {
                packages:[
                    {
                        id: 1,
                        images: ('../src/assets/coding-man.png'),
                        Packages_Name: 'Packages Name',
                        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
                        tag: 'tag',
                        downloadIcon: ('../src/assets/downloadIcon.png'),
                        download: '05',
                        starIcon: ('../src/assets/starIcon.png'),
                        star: '07',
                    },
                    {
                        id: 2,
                        images: ('../src/assets/coding-man.png'),
                        Packages_Name: 'Packages Name',
                        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
                        tag: 'tag',
                        downloadIcon: ('../src/assets/downloadIcon.png'),
                        download: '05',
                        star: '07',
                        starIcon: ('../src/assets/starIcon.png'),
                    },
                    {
                        id: 3,
                        images: ('../src/assets/coding-man.png'),
                        Packages_Name: 'Packages Name',
                        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
                        tag: 'tag',
                        downloadIcon: ('../src/assets/downloadIcon.png'),
                        download: '05',
                        star: '07',
                        starIcon: ('../src/assets/starIcon.png'),
                    },
                ]
            }
        },
    }
</script>
<style scoped>
li >img {
    transition: all .4s ease-in;
}
li:hover >img{
    transform: scale(1.5) rotate(-10deg);
    transition: all .4s ease-in;
}
.group:hover .test{
    height: 100%;
}
.group .test2{
    position: absolute;
    top: 0;
    height: 100%;
}
.group .test2 .item{
    opacity: 0;
}
.group:hover .test2{
    position: absolute;
    top: 0;
    height: 100%;
}
.group:hover .test2 .item{
    opacity: 1;
}
@media(max-width: 687px){
    .group .test2{
        top: 0;
    }
}
@media(max-width: 487px){
    .group .test2{
        position: absolute;
        top: 0;
    }
    .group .test2 h2{
        padding-top: 0;
        padding-bottom: 1rem;
    }
    .group:hover .test2{
        position: absolute;
        top: 0;
    }
}
</style>