import axios from 'axios';

import type { BuildingData } from '@/models/building'

export default class BuildingService {
    public static getBuildings = async () => (await axios.get<BuildingData>('http://localhost:3000/')).data
}