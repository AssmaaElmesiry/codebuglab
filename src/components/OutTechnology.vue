<template>
    <section>
        <titleStyleVue>
            OUR TECHNOLOGY STACK
        </titleStyleVue>
        <div class="container md:mx-auto md:px-12 px-8">
            <div class="h-HSection flex justify-between items-center">
                <ul class="flex justify-between w-full">
                    <li class="border rounded px-12 py-4 bg-blue text-white font-bold text-4xl relative">
                        Front End
                        <div class="absolute -top-5 -translate-y-2/4 left-1/2  w-0 h-0 border-solid Triangle"></div>
                    </li>
                    <li class="border rounded px-12 py-4 bg-blue text-white font-bold text-4xl relative">
                        Back End
                        <div class="absolute -top-5 -translate-y-2/4 left-1/2  w-0 h-0 border-solid Triangle"></div>
                    </li>
                    <li class="border rounded px-12 py-4 bg-blue text-white font-bold text-4xl relative">
                        Database
                        <div class="absolute -top-5 -translate-y-2/4 left-1/2  w-0 h-0 border-solid Triangle"></div>
                    </li>
                    <li class="border rounded px-12 py-4 bg-blue text-white font-bold text-4xl relative">
                        Others
                        <div class="absolute -top-5 -translate-y-2/4 left-1/2  w-0 h-0 border-solid Triangle"></div>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script>
    import titleStyleVue from "./titleStyle.vue";
    export default{
        components:{
            titleStyleVue,
        }
    }
</script>
<style>
.Triangle{
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 15px solid #4EB8F4;
}
</style>