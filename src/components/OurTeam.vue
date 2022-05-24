<template>
    <section>
        <titleStyleVue>
            Hire a Team
        </titleStyleVue>
        <div class="container md:mx-auto md:px-12 px-8 flex md:flex-row flex-col">
            <div class="flex flex-col text-Pcolor">
                <img :src="image" alt="image" class="w-full h-full mb-12"/>
                <p class="text-Pcolor text-2xl"> {{details}} </p>
                <div></div>
            </div>
            <div class="">
                <h2>ffffff</h2>
                <p>{{details}}</p>
            </div>
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
                image: ('../src/assets/teamsection.png'),
                details: 'If you looking for high efficiency stuff to develop and test your application you can hire us, and our packages is a living proof of the good work we do. for more information send us message throw contact us form.',
            }
        },
    }
</script>