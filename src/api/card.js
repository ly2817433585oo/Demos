import request from '../utils/request'

export function getCards(type) {
  return request({
    url:'/cards',
    method:'post',
    params:{
      type:type
    }
  })

}