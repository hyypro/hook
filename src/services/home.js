import { get, post } from '@/utils/request'
import api from '@/services/api'

export const homelist = () => get(api.homeList)
export const homeadd = opt => post(api.add, opt)
export const homedelete = opt => post(api.deletes, opt)
export const homedupdate = opt => post(api.update, opt)


