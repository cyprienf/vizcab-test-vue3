import { describe, expect, it } from "vitest";

import type { Building } from '@/models/building'
import { sortByCarbonEmission, sortBySurface } from '@/utils/building-utils'

describe('building-utils tests', () => {
    it('sortByCarbonEmission should return sorted building list', () => {
        const mockList: Building[] = [
            {
                "id": 1,
                "name": "Nicolas-Lebsack",
                "surface": 4193,
                "carbon_emission": 172256,
                "address": "08 Vera Pass",
                "postcode": 15489,
                "city": "Saint John’s"
            },
            {
                "id": 2,
                "name": "Rosenbaum-Conn",
                "surface": 3966,
                "carbon_emission": 180683,
                "address": "91 Thompson Crossing",
                "postcode": 15489,
                "city": "Xinxu"
            },
            {
                "id": 3,
                "name": "Erdman LLC",
                "surface": 4526,
                "carbon_emission": 464710,
                "address": "33749 Goodland Junction",
                "postcode": 141540,
                "city": "Povarovo"
            }
        ]

        const expectedList: Building[] = [
            {
                "id": 1,
                "name": "Nicolas-Lebsack",
                "surface": 4193,
                "carbon_emission": 172256,
                "address": "08 Vera Pass",
                "postcode": 15489,
                "city": "Saint John’s"
            },
            {
                "id": 2,
                "name": "Rosenbaum-Conn",
                "surface": 3966,
                "carbon_emission": 180683,
                "address": "91 Thompson Crossing",
                "postcode": 15489,
                "city": "Xinxu"
            },
            {
                "id": 3,
                "name": "Erdman LLC",
                "surface": 4526,
                "carbon_emission": 464710,
                "address": "33749 Goodland Junction",
                "postcode": 141540,
                "city": "Povarovo"
            },
            
        ]

        expect(sortByCarbonEmission(mockList)).toStrictEqual(expectedList)
    });

    it('sortBySurface should return sorted building list', () => {
        const mockList: Building[] = [
            {
                "id": 1,
                "name": "Nicolas-Lebsack",
                "surface": 4193,
                "carbon_emission": 172256,
                "address": "08 Vera Pass",
                "postcode": 15489,
                "city": "Saint John’s"
            },
            {
                "id": 2,
                "name": "Rosenbaum-Conn",
                "surface": 3966,
                "carbon_emission": 180683,
                "address": "91 Thompson Crossing",
                "postcode": 15489,
                "city": "Xinxu"
            },
            {
                "id": 3,
                "name": "Erdman LLC",
                "surface": 4526,
                "carbon_emission": 464710,
                "address": "33749 Goodland Junction",
                "postcode": 141540,
                "city": "Povarovo"
            }
        ]

        const expectedList: Building[] = [
            {
                "id": 2,
                "name": "Rosenbaum-Conn",
                "surface": 3966,
                "carbon_emission": 180683,
                "address": "91 Thompson Crossing",
                "postcode": 15489,
                "city": "Xinxu"
            },
            {
                "id": 1,
                "name": "Nicolas-Lebsack",
                "surface": 4193,
                "carbon_emission": 172256,
                "address": "08 Vera Pass",
                "postcode": 15489,
                "city": "Saint John’s"
            },
            {
                "id": 3,
                "name": "Erdman LLC",
                "surface": 4526,
                "carbon_emission": 464710,
                "address": "33749 Goodland Junction",
                "postcode": 141540,
                "city": "Povarovo"
            }
        ]

        expect(sortBySurface(mockList)).toStrictEqual(expectedList)

    });
})