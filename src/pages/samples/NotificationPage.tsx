import { Notification } from "../../features/notification/Notification"
import { Container } from "@chakra-ui/react"

export const NotificationPage = () => {
  return (
    <>
      <Container><h3>Notification</h3></Container>
      <Container>
        <Notification />
      </Container>
    </>
  )
}