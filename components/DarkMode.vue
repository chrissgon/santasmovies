<template>
  <label
    for="mode"
    class="flex items-center px-1 h-8 w-14 rounded-full cursor-pointer border border-slate-300 dark:border-slate-600"
  >
    <!-- @change="emit('change', dark)" -->
    <!-- v-model="dark" -->
    <input @change="change" id="mode" type="checkbox" class="hidden" />

    <img
      :src="`/${dark ? 'dark' : 'light'}mode.svg`"
      :class="{ right: dark }"
      class="rounded-full w-6 h-6 p-1.5 transition-transform bg-sky-100 dark:bg-slate-800 select-none"
    />
  </label>
</template>

<script setup lang="ts">
// data
const dark = useCookie<boolean>("dark", {
  default: () => false,
});

function change(): void {
  dark.value = !dark.value;
}
defineExpose({dark})
</script>

<style scoped>
img.right {
  transform: translateX(22px);
}
</style>
