import { FETCH_HOME_ACTION, FETCH_HOME_ADD, FETCH_HOME_DELETE, FETCH_HOME_UPDATE } from '@/constants/actionTypes'
import { homelist, homeadd, homedelete, homedupdate } from '@/services/home'

export function getList () {
  return {
    type: FETCH_HOME_ACTION,
    payload: homelist()
  }
}

export function add (opt) {
  return {
    type: FETCH_HOME_ADD,
    payload: homeadd(opt)
  }
}

export function deleteData (opt) {
  return {
    type: FETCH_HOME_DELETE,
    payload: homedelete({ id: opt })
  }
}

export function updateData (opt) {
  return {
    type: FETCH_HOME_UPDATE,
    payload: homedupdate(opt)
  }
}