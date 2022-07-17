import request from '@/utils/request'
// 获取用户列表
export const getUser = ({ query, pagenum, pagesize }) => {
  return request({
    url: 'users',
    params: {
      query,
      pagenum,
      pagesize
    }
  })
}
// 添加用户
export const addUser = (data) => {
  return request({
    method: 'POST',
    url: 'users',
    data
  })
}
export const editorUser = ({ id, email, mobile }) => {
  return request({
    method: 'PUT',
    url: `users/${id}`,
    data: {
      email, mobile
    }
  })
}
export const delUser = (id) => {
  return request({
    method: 'DELETE',
    url: `users/${id}`,
    params: {
      id
    }
  })
}
// 分配角色
export const roleUser = (id, rid) => {
  return request({
    method: 'PUT',
    url: `users/${id}/role`,
    data: {
      id,
      rid
    }
  })
}
// 修改用户状态
export const getModify = ({ uId, type }) => {
  return request({
    method: 'PUT',
    url: `users/${uId}/state/${type}`
  })
}
