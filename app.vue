<template>
  <div :class="{ dark: DarkModeRef?.dark }">
    <section
      class="App scrollbar w-full h-screen overflow-hidden overflow-y-scroll dark:text-white dark:bg-slate-900"
    >
      <LazySnow />
      <Header>
        <DarkMode ref="DarkModeRef" />
      </Header>
      <LazyBanner />

      <Main></Main>

      <Footer></Footer>
    </section>
  </div>
</template>

<script setup lang="ts">
import DarkMode from "./components/DarkMode.vue";

// store
const movieStore = useMovieStore();

// data
const DarkModeRef = ref<InstanceType<typeof DarkMode> | null>(null);

// hooks
onMounted(() => {
  movieStore.getReleases();
});
</script>

<style>
html,
body {
  width: 100%;
  max-width: 100%;
  overflow-x: hidden !important;
  font-family: "Poppins", sans-serif;
}
.movies {
  background-image: url("/bg.svg");
  background-size: 100%;
  background-position-y: 0px;
}

.yeseva {
  font-family: "Yeseva One", cursive;
}

.scrollbar::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
.scrollbar::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
.scrollbar::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border: none;
  border-radius: 100px;
}
.dark .scrollbar::-webkit-scrollbar-thumb {
  background: #334155;
}
.scrollbar::-webkit-scrollbar-track {
  background: #f8fafc;
  border: none;
  border-radius: 0;
}
.dark .scrollbar::-webkit-scrollbar-track {
  background: #1e293b;
}
.scrollbar::-webkit-scrollbar-corner {
  background: transparent;
}
</style>
