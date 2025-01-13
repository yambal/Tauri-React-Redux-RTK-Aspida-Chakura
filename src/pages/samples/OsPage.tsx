import { useOs } from "../../hooks/useOs"
import { Container } from "@chakra-ui/react"

export const OsPage = () => {
  // Custom Hook
  const os = useOs()

  return (
    <>
      <Container><h3>Os</h3></Container>
      <Container>
        <p>
          This is a sample implementation of the official plugin. It does not function in browsers.
        </p>
        {os && (
          <dl>
            <dt>Version</dt>
            <dd>{os.version}</dd>
            <dt>Family</dt>
            <dd>{os.family}</dd>
            <dt>Platform</dt>
            <dd>{os.platform}</dd>
            <dt>Arch</dt>
            <dd>{os.arch}</dd>
            <dt>Exe Extention</dt>
            <dd>{os.exeExtension}</dd>
            <dt>Hostname</dt>
            <dd>{os.hostname}</dd>
            <dt>Locale</dt>
            <dd>{os.locale}</dd>
          </dl>
        )}
      </Container>
    </>
  )
}