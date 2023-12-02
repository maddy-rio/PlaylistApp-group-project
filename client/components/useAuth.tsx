import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getRefreshToken } from '../apis/refreshToken'
import { getToken } from '../apis/getToken'
import { useEffect, useState } from 'react'

interface dataTypes {
accessToken: string
refreshToken: string
expiresIn: number

}

export default function useAuth(code: string) {
  const [accessToken, setAccessToken] = useState<string | null>('')
  const [refreshToken, setRefreshToken] = useState<string | null>('')
  const [expiresIn, setExpiresIn] = useState<number | null>(null)
  const queryClient = useQueryClient()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getToken(code)

        setAccessToken(data.accessToken)
        setRefreshToken(data.refreshToken)
        setExpiresIn(data.expiresIn)

        // Update the query data with the fetched data
        queryClient.setQueryData(['data', code], data)
        //refetch the data to ensure it's updated in the background
        queryClient.invalidateQueries(['data', code])
      } catch (error) {
        console.error('Error fetching token data:', error)
      }
    }

    fetchData()
  }, [code, queryClient])

  useEffect(() => {
    if (!refreshToken || !expiresIn) return

    const interval = setInterval(
      async () => {
        try {
          const refreshedData = await getRefreshToken(refreshToken)

          // Update the query data with the refreshed data
          queryClient.setQueryData(['data', code], (data) => ({
            ...data,
            accessToken: refreshedData.accessToken,
            expiresIn: refreshedData.expiresIn,
          }))

          // Update the local state
          setAccessToken(refreshedData.accessToken)
          setExpiresIn(refreshedData.expiresIn)
        } catch (error) {
          console.error('Error refreshing token:', error)
        }
      },
      (expiresIn - 60) * 1000,
    )

    // Clear the interval when the component is unmounted or when the dependencies change
    return () => clearInterval(interval)
  }, [refreshToken, expiresIn, queryClient, code])

  console.log(accessToken)

  return accessToken
}
