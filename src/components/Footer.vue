<template>
    <section class="bg-bgfooter w-full h-full pt-20">
        <div class="container mx-auto  md:px-12 px-8">
            <div class="flex flex-col justify-center items-center pb-12">
                <img :src="img" alt="Stay tuned !" />
                <h2 class="mt-3 mb-5 text-blue text-4xl font-bold">{{title}}</h2>
                <p class="mb-8 text-white text-lg">{{subscribe}}</p>
                <form class="flex md:flex-row flex-col">
                    <input type="email" required  placeholder="Email" class=" md:w-auto w-full mr-4 mb-3 bg-transparent border-blue border pl-5 py-3 rounded text-white"/>
                    <submitVue class="mb-3">Subscribe</submitVue>
                </form>
            </div>
        </div>
        <downfooterVue/>
    </section>
</template>
<script>
    import submitVue from "./buttons/submit.vue";
    import downfooterVue from "./downfooter.vue";
    export default{
        components:{
            submitVue,
            downfooterVue
        },
        data() {
            return {
                img:('../src/assets/footer.png'),
                title: 'Stay tuned !',
                subscribe:'subscribe our newsletter and get notifications to stay update',
            }
        },
    }
</script>