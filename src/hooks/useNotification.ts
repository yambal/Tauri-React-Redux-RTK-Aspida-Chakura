import {
  isPermissionGranted,
  requestPermission,
  sendNotification,
  Options
} from '@tauri-apps/plugin-notification'
import { useEffect, useState } from 'react'

/**
 * 
 * @see: https://v2.tauri.app/plugin/notification/#send-notification
 */
export const useNotification = () => {
  const [isPermGranted, setIsPermGranted] = useState<boolean | undefined>(undefined)

  const checkPermission = async () => {
    let permissionGranted = await isPermissionGranted()
    setIsPermGranted(permissionGranted)
  }

  const requestPerm = async () => {
    const permission = await requestPermission()
    const permissionGranted = permission === 'granted'
    setIsPermGranted(permissionGranted)
  }
  
  useEffect(() => {
    checkPermission()
  }, [])

  useEffect(() => {
    if (isPermGranted === false) {
      requestPerm()
    }
  }, [isPermGranted])

  const _sendNotification = (op: Options) => {
    if(isPermGranted) {
      sendNotification(op)
    }
  }

  return {
    isPermissionGranted: isPermGranted,
    sendNotification: _sendNotification
  }
}