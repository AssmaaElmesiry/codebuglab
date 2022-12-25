<template>
    <section id="AboutUs" class="pt-52 flex container md:mx-auto md:px-12 px-8">
        <div class="flex xl:flex-row flex-col-reverse">
            <div class="flex flex-col grow-0  p-5 xl:w-1/2">
                <h2 class="text-5xl font-bold text-blue">
                    About Us
                </h2>
                <p class="text-xl xl:pt-12 text-justify leading-10 ">
                    We are startup company creating and maintaining web applications and open source packages. Most of our work based on Laravel framework and We create our packages from our clients work. look around here, you might find something useful for you.
                </p>
            </div>
            <div class="w-auto grow">
                <kinesis-container class="">
                    <kinesis-element :strength="50" class="">
                        <img class="w-full h-full p-8" style="filter: drop-shadow(2px 4px 6px #4db8f4) ;" src="../assets/AboutUs.png" alt="aboutus"/>
                    </kinesis-element>
                </kinesis-container>
            </div>
  
        </div>
    </section>
</template>