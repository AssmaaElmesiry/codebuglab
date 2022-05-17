<template>
    <titleStyleVue>
        CodeBugLab in Numbers
    </titleStyleVue>
    <section class="bg-Packages relative">
        <div class="before:content-[''] before:absolute before:w-full before:h-full before:bg-black before:z-40">
            <div class="container mx-auto">
                <div class="py-16">
                    <ul class="flex justify-around">
                        <li v-for="item in packages" :key="item.id">
                            <img :src="item.src" alt="packages" />
                            <span>{{item.num}}</span>
                            <p>{{item.title}}</p>
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