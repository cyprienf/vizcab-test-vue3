<template>
  <div class="building-component">
    <div class="building-component__title">My building</div>
    <div class="building-component__name">{{ building.name }}</div>
    <div class="building-component__address">{{ building.postcode }} {{ building.address }}</div>
    <button class="building-component__button"><EyeIcon /> DETAILS</button>
  </div>
</template>

<script setup lang="ts">
import EyeIcon from '@/components/icons/EyeIcon.vue'

import type { Building } from '@/models/building'

defineProps<{
  building: Building
}>()
</script>

<style scoped lang="scss">
.building-component {
  background-color: #bee7e5;
  padding: 1rem;

  &__title {
    margin-bottom: 0.5rem;
    background-color: #ffffff;
    padding: 0.25rem;
  }

  &__button {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
  }
}
</style>
