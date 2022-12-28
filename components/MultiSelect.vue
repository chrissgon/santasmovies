<template>
  <div class="relative w-full flex items-center select-none">
    <select
      @input="$emit('update:modelValue', items)"
      v-model="model"
      @change="add"
      class="w-full h-full absolute rounded-md !m-0 px-4 py-2 border outline-none dark:bg-slate-800 dark:border-slate-700"
    >
      <slot></slot>
    </select>

    <div class="relative z-10 flex flex-wrap pl-2 !mr-10">
      <Badge
        v-for="item in items"
        class="capitalize my-2 mx-1 font-medium bg-slate-100 dark:bg-slate-700"
      >
        {{ item }} <i @click="remove(item)" class="bi-x-lg ml-2"></i
      ></Badge>
    </div>
  </div>
</template>

<script setup lang="ts">
// data
const model = ref<string>("");
const items = reactive<string[]>([]);

// methods
function add(): void {
  const item = model.value;
  model.value = "";

  if (items.includes(item)) return;

  items.push(item);
}
function remove(item: string): void {
  if (items.length === 1) return;

  items.splice(items.indexOf(item), 1);
}

// emits
defineEmits(["update:modelValue"]);
</script>

<style scoped></style>
