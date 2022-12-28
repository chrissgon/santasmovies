<template>
  <input
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
    :value="modelValue"
    class="rounded-md px-4 py-2 border outline-none dark:bg-slate-800 dark:border-slate-700"
    type="text"
  />
</template>

<script setup lang="ts">
interface IProps {
  modelValue: string;
}

defineProps<IProps>();

defineEmits(["update:modelValue"]);
</script>

<style scoped>
.dark input {
  color-scheme: dark;
}
</style>
