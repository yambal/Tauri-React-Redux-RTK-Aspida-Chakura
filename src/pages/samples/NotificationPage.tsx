import { Notification } from "../../features/notification/Notification"
import { Container, Link } from "@chakra-ui/react"

export const NotificationPage = () => {
  return (
    <>
      <Container><h3>Notification</h3></Container>
      <Container>
        <p>
          This sample demonstrates the implementation of "<Link href="https://github.com/tauri-apps/plugins-workspace/tree/v2/plugins/notification">PLUGIN-NOTIFICATION</Link>".<br />
          The official plugin is available in "<Link href="https://github.com/tauri-apps/plugins-workspace?tab=readme-ov-file">Official Tauri Plugins</Link>".
        </p>
        <Notification />
      </Container>
    </>
  )
}