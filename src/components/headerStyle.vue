
<template>
    <header class="w-full h-28 flex items-center" :class="{'scrolled-nav': scrolledNav }">
        <div class="xl:container md:mx-auto md:px-12 px-8  h-28 flex justify-between items-center  fixed left-0 right-0 z-99">
            <div class="flex h-auto w-auto ">
                <img  class="h-full w-full" src="../assets/logo.png" alt="logo" />
            </div>
            <div class="flex  items-center h-full w-full ">
                <ul v-show="!mobile" class="flex justify-evenly items-center w-full h-full">
                    <li class="h-full w-full"><a href="#AboutUs" class="text-blue font-bold text-lg h-full w-full flex items-center justify-center">About us</a></li>
                    <li class="h-full w-full"><a href="#Packages" class="text-blue font-bold text-lg h-full w-full flex items-center justify-center">Latest packages</a></li>
                    <li class="h-full w-full"><a href="#OutTechnology" class="text-blue font-bold text-lg h-full w-full flex items-center justify-center">Our technology</a></li>
                    <li class="h-full w-full"><a href="#OurTeam" class="text-blue font-bold text-lg h-full w-full flex items-center justify-center">Hire a team</a></li>
                    <li class="h-full w-full"><a href="#Supportus" class="text-blue font-bold text-lg h-full w-full flex items-center justify-center">Support us</a></li>
                </ul>
                <div class="absolute text-xl right-8 md:right-14">
                    <fa :icon="icon" @click="toggleMobileNav" v-show="mobile" :class="{'icon-active': mobileNav}" />
                </div>
                <transition name="mobile-nav">
                    <ul v-show="mobileNav" class="absolute top-0 left-0  p-8 bg-blue w-64 h-screen z-50">
                        <div class="pb-5">
                            <img src="../assets/logo.png" alt="codebuglablogo"/>
                        </div>
                        <li class="flex p-2"><a class="w-full h-full" href="#AboutUs">About us</a></li>
                        <li class="flex p-2"><a class="w-full h-full" href="#Packages">Latest packages</a></li>
                        <li class="flex p-2"><a class="w-full h-full" href="#OutTechnology">Our technology</a></li>
                        <li class="flex p-2"><a class="w-full h-full" href="#OurTeam">Hire a team</a></li>
                        <li class="flex p-2"><a class="w-full h-full" href="#Supportus">Support us</a></li>
                    </ul>
                </transition>
            </div>
        </div>
    </header>
</template>
<script>
    export default{
        data() {
            return {
                scrolledNav: null,
                mobile: false,
                mobileNav: false,
                windowWidth: null,
                icon: 'bars'
            }
        },
        created(){
            window.addEventListener('resize', this.checkScreen);
            this.checkScreen();
        },
        mounted() {
            window.addEventListener("scroll", this.updateScroll)
        },
        methods: {
            toggleMobileNav(){
                this.mobileNav = !this.mobileNav;
                this.icon = (this.icon === "bars" ? "xmark" : "bars")
            },
            updateScroll() {
                const scrollPosition = window.scrollY;
                if (scrollPosition > 20){
                    this.scrolledNav = true;
                    return;
                }
                this.scrolledNav = false;
            },
            checkScreen(){
                this.windowWidth = window.innerWidth;
                if (this.windowWidth <= 991){
                    this.mobile = true;
                    return;
                }
                this.mobile = false;
                this.mobileNav = false;
            }
        },
    }
</script>
<style>
.mobile-nav-enter-active,
.mobile-nav-leave-active{
    transition:  1s ease all;
}
.mobile-nav-enter-from,
.mobile-nav-leave-to{
    transform: translateX(-256px);
}
.mobile-nav-enter-to{
    transform: translateX(0);
}
.scrolled-nav{
    background-color: #fff;
    position: fixed;
    z-index: 99;

}
</style>