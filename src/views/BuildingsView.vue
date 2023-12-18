<template>
  <div class="buildings-view">
    <div class="buildings-view__filter">
      <select v-model="filter">
        <option :value="1">carbon emission per square meter</option>
        <option :value="2">surface</option>
      </select>
    </div>

    <div class="buildings-view__grid">
      <div v-for="building in sortedBuildings" :key="building.id">
        <BuildingComponent :building="building" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, type Ref } from 'vue'

import type { Building } from '@/models/building'

import BuildingComponent from '@/components/BuildingComponent.vue'

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

<style lang="scss" scoped>
.buildings-view {
  &__filter {
    margin-bottom: 1rem;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 1rem;
    column-gap: 1rem;
  }
}
</style>
