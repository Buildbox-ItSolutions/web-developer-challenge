import { QueryFunctionContext, useQuery } from '@tanstack/react-query'
import api from '../../src/services/api'

import { IGetPhotoDetails } from './type'

export const getPhotoDetails = async (ctx: QueryFunctionContext) => {
  const [id] = ctx.queryKey
  if (!id) {
    return
  }
  const { data } = await api.get<IGetPhotoDetails>(`/photos/random`)
  return data
}


export const useGetPhotoDetails = () => {
  return useQuery({queryKey: ['getPhotoDetails'], queryFn: getPhotoDetails})
}
