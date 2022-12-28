<template>
  <footer
    class="footer flex flex-col-reverse sm:flex-row justify-center items-center text-sm bg-primary text-white p-5 lg:px-20"
  >
    <aside
      class="text-xl flex [&_a]:p-3 [&_a]:cursor-pointer [&_a]:opacity-50 [&_a]:transition-all"
    >
      <a
        href="https://www.linkedin.com/in/chrissgon/"
        target="_blank"
        class="inline-flex bi bi-linkedin hover:opacity-100 hover:scale-125"
      ></a>
      <a
        href="https://github.com/chrissgon"
        target="_blank"
        class="inline-flex bi bi-github hover:opacity-100 hover:scale-125"
      ></a>
      <a
        href="https://www.behance.net/chrissgon"
        target="_blank"
        class="inline-flex bi bi-behance hover:opacity-100 hover:scale-125"
      ></a>
    </aside>

    <p class="text-center flex-1 my-2 sm:m-0">
      <span class="opacity-50">Developed by</span>
      <br />
      <a href="https://www.linkedin.com/in/chrissgon/" target="_blank"
        >Christopher Gonçalves</a
      >
    </p>

    <img src="/claus.gif" class="w-24 h-24 -mt-16" />
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
