import { useEffect, useState } from 'react'
import {
  version,
  family,
  platform,
  arch, 
  exeExtension,
  locale,
  hostname,
  Family,
  Platform,
  Arch
} from '@tauri-apps/plugin-os'

/**
 * PLUGIN-OS のサンプル
 * @see https://github.com/tauri-apps/plugins-workspace/tree/v2/plugins/os
 */
export const useOs = () => {
  const [osVersion, setOsVersion] = useState<string|undefined>(undefined)
  const [osFamily, setOsFamily] = useState<Family|undefined>(undefined)
  const [osPlatform, setOsPlatform] = useState<Platform|undefined>(undefined)
  const [osArch, setOsArch] = useState<Arch|undefined>(undefined)
  const [osExeExtention, setOsExeExtention] = useState<string|undefined>(undefined)
  const [osLocale, setOsLocale] = useState<string|null|undefined>(undefined)
  const [osHostname, setHostname] = useState<string|null|undefined>(undefined)

  // 非同期
  const checkOs = async () => {
    try {
      const _version = version()
      setOsVersion(_version)

      const _family: Family = family()
      setOsFamily(_family)

      const _platform: Platform = platform()
      setOsPlatform(_platform)

      const _arch: Arch = arch()
      setOsArch(_arch)

      const _exeExtention = exeExtension()
      setOsExeExtention(_exeExtention)

      const _locale = await locale()
      setOsLocale(_locale)
      
      const _hostname = await hostname()
      setHostname(_hostname)
    } catch (e) {

    }
  }

  useEffect(() => {
    checkOs()
  }, [])

  return {
    version: osVersion,
    family: osFamily,
    platform: osPlatform,
    arch: osArch,
    exeExtension: osExeExtention,
    locale: osLocale,
    hostname: osHostname
  }
}