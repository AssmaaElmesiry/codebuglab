<template>
    <div class="flex justify-center my-12">
        <div class="flex items-end">
            
            <p class="bg-blue  md:text-5xl sm:text-3xl text-xl text-white font-bold relative px-2 uppercase"> 
                <span class="font-bold md:text-6xl sm:text-5xl text-4xl text-black absolute -top-3 -left-3">{</span>
                    <slot>ppp </slot>
                <span class="font-bold md:text-6xl sm:text-5xl text-4xl text-black absolute -top-3 -right-3">}</span>
            </p>
            
        </div>
    </div>
</template>