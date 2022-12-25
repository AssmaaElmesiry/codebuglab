<template>
    <section id="OurTeam">
        <titleStyleVue>
            Hire a Team
        </titleStyleVue>
        <div class="container md:mx-auto md:px-12 px-8 flex md:flex-row flex-col">
            <div class="flex flex-col text-Pcolor max-w-full max-h-full w-full h-full xl:p-14">
                <img :src="image" alt="image" class="w-full h-full mb-12" style="filter: drop-shadow(2px 4px 6px #4db8f4) ;"/>
                <p class="text-Pcolor text-2xl leading-normal"> {{details}} </p>
                <div class="mt-12">
                    <ul class="flex flex-wrap sm:flex-row flex-col">
                        <li class="mr-2 mb-2">
                            <a href="mailto:admin@commentatk-media.com" class="flex items-center text-black">
                                <fa icon="envelope" class=" border border-solid border-blue rounded-md text-xl p-2 mr-2 text-blue "/>
                                admin@commentatk-media.com
                            </a>
                        </li>
                        <li class="mr-2 mb-2">
                            <a href="https://wa.me/01094059489" target="_blank" class="flex items-center text-black">
                                <fa icon="phone" class=" border border-solid border-blue rounded-md text-xl p-2 mr-2 text-blue "/>
                                01094059489
                            </a>
                        </li>
                        <li class="mr-2 mb-2">
                            <a href="tel:0403507703" class="flex items-center text-black">
                                <fa icon="phone" class=" border border-solid border-blue rounded-md text-xl p-2 mr-2 text-blue " />
                                0403507703
                            </a>
                        </li>
                    </ul>
                    <div class="md:mt-12 mt-4 mb-4 flex justify-center">
                        <ul class="w-1/2 flex justify-between text-3xl">
                            <li class="text-blue w-5 text-center">
                                <a href="#" class="flex justify-center w-full">
                                    <fa :icon="['fab', 'facebook-f']"/>
                                </a>
                            </li>
                            <li class="text-blue w-5 text-center">
                                <a href="#" class="flex justify-center w-full">
                                    <fa :icon="['fab', 'twitter']"/>
                                </a>
                            </li>
                            <li class="text-blue w-5 text-center">
                                <a href="#" class="flex justify-center w-full">
                                    <fa :icon="['fab', 'github']"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="max-w-full max-h-full w-full h-full xl:p-14 ">
                <h2 class="text-4xl text-blue font-bold mb-9">Contact Us</h2>
                <p class="text-Pcolor text-lg pb-12">{{disc}}</p>
                <form class="ww-full flex flex-col">
                    <div class=" mb-5 relative">
                        <input type="text" required placeholder="Your Name"  class="border border-borderColor  border-solid rounded w-full pl-12 py-3"/>
                        <img :src="user" alt="user" class=" absolute  top-1/2 left-4 w-auto h-auto transform -translate-y-1/2"/>
                    </div>
                    <div class=" mb-5 relative">
                        <input type="email" required placeholder="Your Mail"  class="border border-borderColor  border-solid rounded w-full pl-12 py-3"/>
                        <img :src="envelope" alt="envelope" class=" absolute  top-1/2 left-4 w-auto h-auto transform -translate-y-1/2"/>
                    </div>
                    <div class="mb-5 relative">
                        <textarea placeholder="Your Message" class="border  border-borderColor border-solid w-full h-44 pl-12 pt-3 "></textarea>
                        <img :src="comment" alt="comment" class=" absolute  top-4 left-4 w-auto h-auto"/>
                    </div>
                    <submitVue>submit</submitVue>
                </form>
            </div>
        </div>
    </section>
</template>
<script>
    import titleStyleVue from "./titleStyle.vue";
    import submitVue from "./buttons/submit.vue";
    export default{
        components:{
            titleStyleVue,
            submitVue
        },
        data() {
            return {
                image: ('../src/assets/teamsection.png'),
                details: 'If you looking for high efficiency stuff to develop and test your application you can hire us, and our packages is a living proof of the good work we do. for more information send us message throw contact us form.',
                disc:"If you want to ask us about our work or to hire us, feel free to send us message here, but don't send us about any problem in the package unless it's security issue, there is an issue section in github your can reach out to us there.",
                user: ('../src/assets/user.png'),
                envelope: ('../src/assets/envelope.png'),
                comment: ('../src/assets/comment.png')
            }
        },
    }
</script>