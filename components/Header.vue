<template>
  <header
    class="w-full flex justify-between items-center select-none px-6 pt-8 pb-14 lg:px-20"
  >
    <a href="https://github.com/chrissgon/santasmovies" target="_blank"
      ><i
        class="bi-github text-3xl opacity-50 hover:opacity-100 cursor-pointer"
      ></i
    ></a>

    <div class="relative">
      <h4 class="yeseva text-xl text-primary dark:text-white">Santa's Movies</h4>
      <img
        class="absolute w-16 -right-16 -top-11 rotate-180 -scale-x-100"
        src="/claus.gif"
        alt="Claus pixel"
      />
    </div>

    <slot></slot>
  </header>
</template>
