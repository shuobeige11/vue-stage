# vue-stage
基于 vuex ＋ vue ＋ vue－router的 单页面应用脚手架

npm run dev 开发环境
npm run build 编译压缩


src 编译前文件

assets 图片／公共文件存放目录
compontents 基础组件目录
container 业务组件目录
store：
  api 全局状态码文件
  actions： action 文件存放目录
  modules：各模块state，getter，文件目录（目前根据路由分模块摆放）
  index.js: store处理文件
app.vue: 入口文件
main.js: 挂载文件
router.js：路由文件
