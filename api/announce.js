import http from "../plugins/request.js"

//获取用户协议
export function GetUserProtocol(params) {
  return http({
    url: '/v3/user/get-user-protocol',
    method: 'get',
    params
  })
}

// //添加公告
// export function GovSubmit(params) {
//   return http({
//     url: '/web/gov/notice/submit',
//     method: 'post',
//     data: params
//   })
// }
