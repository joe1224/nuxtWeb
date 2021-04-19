module.exports = {
  // dev环境
  dev: {
    NODE_ENV: 'dev',
    BASE_API: 'https://ctms-dev.haioupai.com/'
  },
  // test环境
  test: {
    NODE_ENV: 'test',
    BASE_API: 'http://api-eadmin-test.haioupai.com'
  },
  // uat环境
  uat: {
    NODE_ENV: 'uat',
    BASE_API: 'http://uat-admin-api-ld.haioupai.com'
  },
  // prod环境
  prod: {
    NODE_ENV: 'production',
    BASE_API: 'http://admin-api-lingdao.haioupai.com'
  }
}