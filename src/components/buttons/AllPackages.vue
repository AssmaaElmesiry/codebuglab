<template>
    <div class="flex justify-center pt-7">
        <button class="border border-blue border-solid font-bold rounded px-6 py-2 text-blue hover:bg-blue hover:text-white ease-in duration-300">
            ALL PACKAGES
            <fa icon="angles-right" class="pl-2 icon" />
        </button>
    </div>
</template>
<style>
.icon{
    animation: mover5 2s ease-in-out infinite;
}
@keyframes mover5 {
  0% {
    transform: translateX(10px);
  }

  50% {
    transform: translateX(-5px);
  }

  100% {
    transform: translateX(10px);
  }
}
</style>