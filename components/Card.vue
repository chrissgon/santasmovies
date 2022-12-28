<template>
  <article
    class="Card w-full relative flex flex-col lg:flex-row rounded-md overflow-hidden bg-black text-white shadow-xl"
  >
    <!-- loading -->
    <div
      v-if="loading"
      class="absolute w-full h-96 flex justify-center items-center z-30"
    >
      <Spin class="text-white w-10 h-10" />
    </div>

    <!-- controls -->
    <div
      @click="previous"
      class="Control absolute left-0 w-14 h-96 lg:h-full flex justify-center items-center cursor-pointer z-20"
    >
      <i class="bi-chevron-left text-4xl text-white"></i>
    </div>
    <div
      @click="next"
      class="Control absolute right-0 w-14 h-96 lg:h-full flex justify-center items-center cursor-pointer z-20"
    >
      <i class="bi-chevron-right text-4xl text-white"></i>
    </div>

    <!-- poster -->
    <figure
      class="Poster relative w-full lg:w-96 h-96 flex after:content-[''] after:w-full after:h-3 after:absolute after:bottom-0 lg:after:h-full lg:after:relative lg:after:w-5 after:block after:z-10"
    >
      <h1
        v-if="!loading"
        v-text="i + 1"
        class="absolute text-9xl bottom-0 left-16 lg:top-8 lg:left-auto lg:right-16 pointer-events-none"
        style="text-shadow: 0 4px 30px black"
      ></h1>
      <img
        v-if="movie?.Poster"
        :src="movie?.Poster"
        :alt="movie?.Title"
        class="w-full object-cover"
      />
    </figure>

    <!-- info -->
    <div
      class="relative min-h-full flex flex-col justify-between py-10 px-10 lg:pr-16 z-10"
    >
      <h4 v-text="movie?.Title" class="yeseva text-2xl mb-5"></h4>

      <div v-if="!loading">
        <Badge v-text="movie?.Time" class="bg-secondary mr-3"></Badge>
        <Badge v-text="movie?.Year" class="bg-secondary mr-3"></Badge>
        <Badge v-text="movie?.Language" class="bg-secondary mr-3"></Badge>
      </div>

      <p
        v-text="movie?.Plot"
        class="Plot w-fit lg:h-36 my-5 overflow-hidden text-ellipsis opacity-90"
      ></p>

      <div>
        <Badge
          v-for="genre in movie?.GenreList"
          v-text="genre"
          class="Genre mr-3"
        ></Badge>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { IMovieDTO } from "~/types/IMovies";

// store
const movieStore = useMovieStore();

// computed
const movie = computed<IMovieDTO>(() => {
  return movieStore.releases[i.value];
});
const loading = computed<boolean>(() => {
  return movieStore.releases.length === 0;
});

// data
const i = ref<number>(0);

// methods
function previous(): void {
  if (i.value === 0) return;

  --i.value;
}
function next(): void {
  if (i.value === movieStore.releases.length - 1) return;

  ++i.value;
}
</script>

<style scoped>
.Control {
  background: rgba(0, 0, 0, 0.3);
}
.Control:hover {
  background: rgba(0, 0, 0, 0.6);
}
.Poster {
  min-width: 400px;
}
.Poster::after {
  background: black;
  box-shadow: 0px 0 100px 90px black;
}
.Plot {
  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
}
.Genre {
  background: rgba(255, 255, 255, 0.1);
}
</style>
