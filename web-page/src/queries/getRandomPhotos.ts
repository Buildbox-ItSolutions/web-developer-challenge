import { useQuery } from '@tanstack/react-query'
import api from '../../src/services/api'

import { IGetPhotoDetails } from './type'

export const getPhotoDetails = async () => {
  const { data } = await api.get<IGetPhotoDetails>(`/photos/random?client_id=${import.meta.env.VITE_REACT_ACCESS_KEY}`,{
    headers: {
      Authorization: `Client-ID ${import.meta.env.VITE_REACT_ACCESS_KEY}`
    }
  })
  return data
}


export const useGetPhotoDetails = () => {
  return useQuery({queryKey: ['getPhotoDetails'], queryFn: getPhotoDetails})
}
