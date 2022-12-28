<template>
  <select
    @input="
      $emit('update:modelValue', ($event.target as HTMLSelectElement).value)
    "
    :value="modelValue"
    class="rounded-md px-4 py-2 border outline-none dark:bg-slate-800 dark:border-slate-700"
  >
    <slot></slot>
  </select>
</template>

<script setup lang="ts">
interface IProps {
  modelValue: string;
}

defineProps<IProps>();

defineEmits(["update:modelValue"]);
</script>

<style scoped></style>
