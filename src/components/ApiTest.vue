<template>
  <div>
    <div v-if="isLoading">Loading...</div>
    <template v-for="(entry, i) in entries" :key="i">
      <pre>{{ entry.Description }}</pre>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useEntries } from '@/queries/useEntries'

const { isLoading, data: entries } = useEntries()
</script>
