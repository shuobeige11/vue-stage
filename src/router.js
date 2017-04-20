const routes = [
  {
    path: '/',
    component:(resolve) => {
      require.ensure(['./container/Login'], () => {
        resolve(require('./container/Login'))
      })
    }
  },
  {
    path: '/login',
    component: (resolve) => {
      require.ensure(['./container/Login'], () => {
        resolve(require('./container/Login'))
      })
    }
  },
  {
    path: '/register',
    component: (resolve) => {
      require.ensure(['./container/Register'], () => {
        resolve(require('./container/Register'))
      })
    }
  }
]
export default () => routes
