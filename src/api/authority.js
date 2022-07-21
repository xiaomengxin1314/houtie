import request from '@/utils/request'

export const getRloe = (type) => {
  return request({
    url: `rights/${type}`

  })
}
export const RloeList = (type) => {
  return request({
    url: `rights/${type}`

  })
}
