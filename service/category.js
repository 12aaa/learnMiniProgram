import request from './network.js'

export function getCategory() {
  return request({
    url: '/category'
  })
}

export function getSubcategory(maitKey) {
  return request({
    url: '/api/hy/subcategory',
    data: {
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return request({
    url: '/api/hy/subcategory/detail',
    data: {
      miniWallkey,
      type
    }
  })
}