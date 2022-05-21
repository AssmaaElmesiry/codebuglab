<template>
    <div class="flex justify-center my-12">
        <div class="flex items-end">
            
            <p class="bg-blue  sm:text-5xl text-3xl text-white font-bold relative px-2 uppercase"> 
                <span class="font-bold sm:text-6xl text-5xl text-black absolute -top-3 -left-3">{</span>
                    <slot>ppp </slot>
                <span class="font-bold sm:text-6xl text-5xl text-black absolute -top-3 -right-3">}</span>
            </p>
            
        </div>
    </div>
</template>