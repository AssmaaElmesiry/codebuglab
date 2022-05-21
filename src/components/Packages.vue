<template>
    <section>
        <titleStyleVue>
            Latest packages
        </titleStyleVue>
        <div class="container">
            <ul>
                <li v-for=" item in packages" :key="item">
                    <img :src="item.images"/>
                    <div>
                        <h2> {{item.Packages_Name}} </h2>
                        <p> {{item.details}} </p>
                        <span> {{item.tag}} </span>
                        <span> {{item.star}} </span>
                    </div>
                </li>
            </ul>            
        </div>
    </section>
</template>
<script>
    import titleStyleVue from "./titleStyle.vue";
    export default{
        components:{
            titleStyleVue,
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
                        download: '05',
                        star: '07',
                    },
                    {
                        id: 2,
                        images: ('../src/assets/coding-man.png'),
                        Packages_Name: 'Packages Name',
                        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
                        tag: 'tag',
                        download: '05',
                        star: '07',
                    },
                    {
                        id: 3,
                        images: ('../src/assets/coding-man.png'),
                        Packages_Name: 'Packages Name',
                        details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
                        tag: 'tag',
                        download: '05',
                        star: '07',
                    },
                ]
            }
        },
    }
</script>
