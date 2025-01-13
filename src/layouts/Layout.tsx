import { Container, Stack, Text } from "@chakra-ui/react"
import { Link, Outlet } from "react-router"

export const Layout = () => {
  return (
    <>
      <Container bg="black" color="white">
        <Link to="/"><Text as="h1" fontSize="xl">Hoge</Text></Link>
      </Container>
      <Container>
        <Stack direction="row" fontSize="sm">
          <Link to="/samples">Samples</Link>
        </Stack>
      </Container>
      <hr />
      <Outlet />
    </>
  )
}