import axios from 'axios';

import type { Building } from '@/models/building'

export default class BuildingService {
    public static getBuildings = async () => (await axios.get<Building>('http://localhost:3000/')).data
}