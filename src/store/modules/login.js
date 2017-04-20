// import * as types from '../api'

// state初始化
const state = {
  all: [],
  isFetching: false
}

const getters = {
  isFetching: state => state.isFetching
}

export default {
  state,
  getters
}
