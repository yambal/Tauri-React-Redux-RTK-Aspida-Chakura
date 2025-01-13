import { Button } from "../../components/ui/button"
import { useNotification } from "../../hooks/useNotification"
import { useCallback } from "react"

export const Notification = () => {
  const {isPermissionGranted, sendNotification} = useNotification()

  const notificationHandle = useCallback(() => {
    sendNotification({title: "Hello", body: "Tauri"})
  },[isPermissionGranted, sendNotification])

  return (
    <div>
      {isPermissionGranted ? <Button onClick={notificationHandle}>Notification</Button> : "mm.."}
    </div>
  )
}