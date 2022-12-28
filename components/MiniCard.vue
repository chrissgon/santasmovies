<template>
  <div
    @click="view = true"
    @mouseenter="view = true"
    @mouseleave="view = false"
    :class="{ view }"
    class="MiniCard relative rounded-md text-white overflow-hidden [&.view]:after:content-[''] [&.view]:before:content-['']"
  >
    <img
      :src="movie.Poster"
      :alt="movie.Title"
      class="w-full h-full object-cover rounded-md"
    />

    <div v-if="view" class="absolute bottom-0 z-10 p-6">
      <h4 v-text="movie.Title" class="yeseva text-lg mb-5"></h4>

      <div>
        <Badge v-text="movie.Time" class="bg-secondary mr-3"></Badge>
        <Badge v-text="movie.Year" class="bg-secondary mr-3"></Badge>
        <Badge v-text="movie.Language" class="bg-secondary mr-3"></Badge>
      </div>

      <p
        v-text="movie.Plot"
        class="Plot w-fit mt-5 overflow-hidden text-xs text-ellipsis opacity-90"
      ></p>

      <div>
        <Badge
          v-for="genre in movie.GenreList"
          v-text="genre"
          class="Genre mr-3 mt-3"
        ></Badge>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IMovieDTO } from "~/types/IMovies";

interface IProps {
  movie: IMovieDTO;
}

defineProps<IProps>();

// data
const view = ref(false);
</script>

<style scoped>
.MiniCard {
    
  max-width: 300px;
  min-width: 300px;
  height: 450px;
}

.MiniCard::after {
  background: black;
  display: flex;
  width: 100%;
  height: 200px;
  position: absolute;
  bottom: 0;
}
.MiniCard::before {
  box-shadow: 0px 0 50px 120px black;
  display: flex;
  width: 100%;
  height: 150px;
  position: absolute;
  bottom: 0px;
  z-index: 10;
}

.Plot {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.Genre {
  background: rgba(255, 255, 255, 0.1);
}
</style>
