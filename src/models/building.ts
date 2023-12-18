export interface BuildingData {
    data: Building[]
}

export interface Building {
    id: number
    name: string
    surface: number
    carbon_emission: number
    address: string
    postcode: number
    city: string
}
