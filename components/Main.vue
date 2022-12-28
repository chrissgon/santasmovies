<template>
  <main
    class="movies relative sm:-mt-20 xl:-mt-40 dark:mt-5 dark:xl:-mt-20 z-30"
  >
    <h1 class="yeseva text-primary text-center text-2xl px-6 dark:text-white">
      Watch the latest Christmas releases
    </h1>

    <div class="p-6 lg:px-20">
      <Card />
    </div>

    <article
      class="w-full flex flex-auto flex-col justify-center items-center px-6 py-10"
    >
      <h1 class="yeseva text-primary text-center text-2xl dark:text-white">
        Find Christmas movies to watch with the family
      </h1>
      <Search @search="movieIndex = 0" />

      <div class="flex relative w-full overflow-hidden pb-20 sm:pb-0 sm:pl-10">
        <!-- cards -->
        <div v-if="!noMovies" :style="margin" class="flex">
          <MiniCard
            v-for="movie in movieStore.movies"
            :movie="movie"
            class="m-5"
          />
        </div>

        <!-- controls -->
        <div
          v-if="showControlPrevious"
          @click="previous"
          class="Control absolute left-0 bottom-0  w-14 h-16 sm:h-full flex justify-center items-center cursor-pointer z-20 rounded-md bg-white dark:bg-slate-900"
        >
          <i class="bi-chevron-left text-4xl text-secondary"></i>
        </div>
        <div
          v-if="showControlNext"
          @click="next"
          class="Control absolute right-0 bottom-0 w-14 h-16 sm:h-full flex justify-center items-center cursor-pointer z-20 rounded-md bg-white   dark:bg-slate-900"
        >
          <Spin v-if="loading" class="w-8 text-secondary" />
          <i v-else class="bi-chevron-right text-4xl text-secondary"></i>
        </div>

        <!-- not found -->
        <aside
          v-if="noMovies"
          class="w-full flex flex-col justify-center items-center mt-10"
        >
          <img class="w-24 -mt-10" src="/run.gif" alt="Claus Run" />
          <span class="text-lg font-bold">Working...</span>
        </aside>
      </div>
    </article>
  </main>
</template>

<script setup lang="ts">
const movieStore = useMovieStore();

// computed
const margin = computed<string>(() => {
  if (movieIndex.value <= 0) return "";
  return `margin-left: -${340 * movieIndex.value}px`;
});
const noMovies = computed<boolean>(() => {
  return movieStore.movies.length === 0;
});
const showControlPrevious = computed<boolean>(() => {
  return movieIndex.value > 0;
});
const showControlNext = computed<boolean>(() => {
  return movieIndex.value < movieStore.movies.length - 1;
});

// data
const movieIndex = ref<number>(0);
const loading = ref<boolean>(false);
const major = ref<number>(0);

// methods
async function next(): Promise<void> {
  if (loading.value) return;

  ++movieIndex.value;

  if (movieIndex.value > major.value) {
    major.value = movieIndex.value;
    await verifyAndLoadMoreMovies();
  }
}
function previous(): void {
  if (movieIndex.value === 0) return;
  --movieIndex.value;
}

async function verifyAndLoadMoreMovies(): Promise<void> {
  const index = movieIndex.value;

  if (index % 5 !== 0) return;

  const multiple = movieStore.movies.length + 10;
  const parts = multiple.toString().split("");
  parts.pop();
  const page = Number(parts.join(""));

  loading.value = true;

  try {
    await movieStore.search(page);
    loading.value = false;
  } catch {
    loading.value = false;
    movieIndex.value = 0;
  }
}
</script>

<style scoped></style>
