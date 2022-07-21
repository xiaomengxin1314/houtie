import request from '@/utils/request'

export const getGoods = ({ query, pagenum, pagesize }) => {
  return request({
    url: 'goods',
    params: {
      query, pagenum, pagesize
    }
  })
}
