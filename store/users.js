import ImageryService from '@/services/ImageryService.js'

export const state = () => ({
  user: null
})

export const mutations = {
  SET_USER_DATA(state, userData) {
    state.user = userData
    localStorage.setItem('user', JSON.stringify(userData))
    ImageryService.getToken()
  },
  CLEAR_USER_DATA(state) {
    location.reload()
    state.user = null
    localStorage.clear()
  }
}

export const actions = {
  register({ commit }, credentials) {
    return ImageryService.addUser(credentials).then(({ data }) => {
      commit('SET_USER_DATA', data)
    })
  },
  login({ commit }, credentials) {
    return ImageryService.loginUser(credentials).then(({ data }) => {
      commit('SET_USER_DATA', data)
    })
  },
  logout({ commit }) {
    commit('CLEAR_USER_DATA')
  }
}

export const getters = {
  loggedIn(state) {
    return !!state.user
  },
  userId(state) {
    return state.user._id
  }
}
