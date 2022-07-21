import request from '@/utils/request'
export const rolesList = () => {
  return request({
    url: 'roles'
  })
}
