
import HttpReq from '@/lib/https'
// 开始任务
function startTaskApi (data) {
  return HttpReq.formPost({
    url: 'Home/startTask',
    data
  })
}
// 结束任务
function endTaskApi (data) {
  return HttpReq.formPost({
    url: 'Home/completeTask',
    data
  })
}
// 任务列表
function taskListApi (data) {
  return HttpReq.formPost({
    url: 'Home/getTaskList',
    data
  })
}
// 获取机台信息
function getMachineInfoApi (data) {
  return HttpReq.formPost({
    url: 'Home/getMachineInfo',
    data
  })
}
// 上币
function coinPlayApi (data) {
  return HttpReq.formPost({
    url: 'Home/noticeMachine',
    data
  })
}
// 获取微信jsapi信息
function getWxSignInfoApi (data) {
  return HttpReq.formPost({
    url: 'Home/getSign ',
    data,
    notLogin: true
  })
}
export {
  startTaskApi, // 开始任务
  endTaskApi, // 结束任务
  taskListApi, // 任务列表
  getMachineInfoApi, // 获取机台信息
  getWxSignInfoApi, // 获取微信jsapi信息
  coinPlayApi // 上币
}
