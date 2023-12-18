<template>
  <div>{{ buildings }}</div>
</template>

<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue'

import BuildingService from '@/services/building'
import type { Building } from '@/models/building'

const buildings: Ref<Building> = ref()

onMounted(async () => {
  buildings.value = (await BuildingService.getBuildings()).data
})
</script>
