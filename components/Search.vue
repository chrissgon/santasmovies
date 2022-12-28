<template>
  <form
    class="Search w-fit flex flex-wrap justify-center mt-10 py-4 px-4 rounded-md border backdrop-blur-lg border-slate-100 dark:border-slate-800"
  >
    <Input
      v-model="movieStore.title"
      class="w-full sm:w-fit m-2"
      placeholder="Title"
    />
    <Input
      v-model="movieStore.year"
      placeholder="Year"
      class="w-full sm:w-fit m-2"
      type="number"
      min="1900"
      max="2099"
      step="1"
    />
    <Select v-model="movieStore.type" class="w-full sm:w-fit m-2">
      <option value="movie" selected>Movie</option>
      <option value="series">Series</option>
    </Select>
    <Button @click="search" class="w-full sm:w-fit m-2">Search</Button>
  </form>
</template>

<script setup lang="ts">
// store
const movieStore = useMovieStore();

// methods
function search(): void {
  movieStore.movies.length = 0;
  movieStore.search();
  emit("search");
}

// hooks
onMounted(() => {
  movieStore.search();
});

// emits
const emit = defineEmits(["search"]);
</script>

<style scoped>
.Search {
  background: rgba(241, 245, 249, 0.3);
}
.dark .Search {
  background: rgba(30, 41, 59, 0.3);
}
</style>
