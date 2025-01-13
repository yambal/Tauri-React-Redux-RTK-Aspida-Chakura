import { Container } from "@chakra-ui/react"
import Weather from "../../features/weather/Wearger"

export const WeatherPage = () => {
  return (
    <>
      <Container>
        <h3>Weather</h3>
      </Container>
      <Container>
        <Weather />
      </Container>
    </>
  )
}