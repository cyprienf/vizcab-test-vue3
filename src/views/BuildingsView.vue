<template>
  <div class="buildings-view">
    <div class="buildings-view__filter">
      <select v-model="filter">
        <option :value="1">carbon emission per square meter</option>
        <option :value="2">surface</option>
      </select>
    </div>

    <div>{{ sortedBuildings }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, type Ref } from 'vue'

import type { Building } from '@/models/building'

import BuildingService from '@/services/building'
import { sortByCarbonEmission, sortBySurface } from '@/utils/building-utils'

const buildings: Ref<Building[]> = ref([])
const filter: Ref<number> = ref(1)

const sortedBuildings = computed(() => {
  return filter.value === 1 ? sortByCarbonEmission(buildings.value) : sortBySurface(buildings.value)
})

onMounted(async () => {
  buildings.value = (await BuildingService.getBuildings()).data
})
</script>
