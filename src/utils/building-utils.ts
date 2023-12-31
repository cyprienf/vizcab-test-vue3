import type { Building } from '@/models/building'

export const sortBySurface = (array: Building[]): Building[] =>
  array.sort((a, b) => (a.surface > b.surface ? 1 : -1))

export const sortByCarbonEmission = (array: Building[]): Building[] =>
  array.sort((a, b) => (a.carbon_emission > b.carbon_emission ? 1 : -1))

 export const paginate = (array: Building[], pageSize: number, pageNumber: number): Building[] => 
  array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)