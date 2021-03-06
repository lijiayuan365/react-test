/**
 * @Description: proxy本地代理配置
 * @Author: Neo
 * @Date: 2022-01-11
 * @LastEditTime: 2022-01-11
 * @LastEditors: Neo
 */
const { createProxyMiddleware } = require('http-proxy-middleware')

const proxyData = {
  '/proxy': {
    target: 'http://test.backend.dog-charity.utipsgood.com/api',
    changeOrigin: true,
    secure: false,
  },
}

module.exports = function setupProxy (app: any) {
  Object.keys(proxyData).forEach(key => {
    app.use(key, createProxyMiddleware((proxyData as any)[key]))
  })
}

export {}
