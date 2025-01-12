import { Weather } from '../../../../models/weather'

export type Methods = {
  get: {
    query: {
      latitude: number
      longitude: number
      daily: string
      timezone: string
    }
    resBody: Weather
  }
}