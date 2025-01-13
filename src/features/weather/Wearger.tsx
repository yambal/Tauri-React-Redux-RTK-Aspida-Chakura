import { Spinner } from '@chakra-ui/react'
import { useGetWeatherQuery, useLazyGetWeatherQuery } from '../../store/queries/weatherQuery'
import { Button } from '../../components/ui/button'
import { useCallback, useState } from 'react'

export default function Weather() {
  const [latlon] = useState<{latitude: number, longitude: number}>({latitude: 35.6785, longitude: 139.6823})
  const { data, isLoading, isFetching, isSuccess, isError } = useGetWeatherQuery(
    {
      latitude: latlon.latitude,
      longitude: latlon.longitude,
    },
    {
      pollingInterval: 60000,
    }
  )

  const [trigger] = useLazyGetWeatherQuery()

  const fetchHandler = useCallback(() => {
    trigger({latitude: latlon.latitude, longitude: latlon.longitude})
  }, [latlon])
  

  return (
    <div>
      <p>This sample utilizes Redux, RTK, RTK Query, and aspida (axios).</p>
      <div>
        {isFetching && "is fetching"}
        {isSuccess && "is success"}
        {isError && "is error"}
      </div>
      <Button onClick={fetchHandler}>Fetch</Button>
      {isLoading && <Spinner />}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}