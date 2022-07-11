import request from '@/utils/request'
export const getLogin = ({ username, password }) => {
  return request({
    method: 'POST',
    url: 'login',
    data: {
      username,
      password
    }

  })
}
