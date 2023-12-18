<template>
  <div class="building-details" v-if="building">
    <h1 class="building-details__title">My building</h1>

    <div class="building-details__category">
      <h2 class="building-details__category__title">Address</h2>
      {{ building.address }} <br />
      {{ building.postcode }} {{ building.city }}
    </div>

    <div class="building-details__category">
      <h2 class="building-details__category__title">Surface (m2)</h2>
      {{ building.surface }}
    </div>

    <div class="building-details__category">
      <h2 class="building-details__category__title">Carbon emission (kg eq. Co2/m2)</h2>
      {{ building.carbon_emission }}
    </div>

    <RouterLink to="/">
      <button class="building-details__back"><ArrowIcon /> Back</button>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'

import ArrowIcon from '@/components/icons/ArrowIcon.vue'

import type { Building } from '@/models/building'

import BuildingService from '@/services/building'

import { useRoute } from 'vue-router'

const route = useRoute()

const building: Ref<Building> = ref()

onMounted(async () => {
  building.value = await BuildingService.getBuilding(+route.params.id)
})
</script>

<style scoped lang="scss">
.building-details {
  background-color: #e8f2f2;

  &__category {
    margin-bottom: 1rem;

    &__title {
      font-weight: 700;
      font-size: 1.25rem;
    }
  }

  &__back {
    display: flex;
  }
}
</style>
