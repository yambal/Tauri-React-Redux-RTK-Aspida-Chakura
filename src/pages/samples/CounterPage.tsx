import { Container } from "@chakra-ui/react"
import { Counter } from "../../features/counter/Counter"

export const CounterPage = () => {
  return (
    <>
      <Container><h3>Counter</h3></Container>
      <Container>
        <Counter />
      </Container>
    </>
  )
}