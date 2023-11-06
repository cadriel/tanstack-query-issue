<template>
  <div>
    <template v-for="(entry, i) in entries" :key="i">
      <pre>{{ entry.Description }}</pre>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { testApi } from '@/api'
import type { IEntry } from '@/api'

const data = ref<null | IEntry[]>(null)
const entries = computed(() => {
  return data.value?.slice(0, 10)
})

testApi.getEntries().then((result) => (data.value = result))
</script>
