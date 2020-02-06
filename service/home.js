import request from './network.js'

export function getMultiData() {
  return request({
    url: '/api/hy/home/multidata'
  })
} 

export function getProduct(type, page) {
  return request({
    url: '/api/hy/home/data',
    data: {
      type,
      page
    }
  })
}