import { Container, Stack, Text } from "@chakra-ui/react"
import { Link, Outlet } from "react-router"

export const SampleLayout = () => {
  return (
    <>
      <Container>
        <Link to="/samples"><Text as="h2" fontSize="lg">Samples</Text></Link>
      </Container>
      <Container>
        <Stack direction="row" fontSize="sm">
          <Link to="counter">Counter</Link>
          <Link to="weather">Weather</Link>
          <Link to="notification">Notification</Link>
        </Stack>
      </Container>
      <hr />
      <Outlet />
    </>
  )
}