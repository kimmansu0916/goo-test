import { getData, fetchUserInfo, setUser } from '../api/index.js'

export default {
  GET_DATA(context, url) {
    getData(url)
      .then(response => {
        context.commit('SET_DATA', response.data);
      })
      .catch(error => {
        console.log("실패 했습니다.", error);
      })
  },

  GET_USER_INFO({ commit }, user) {
    fetchUserInfo(user)
      .then(({ data }) => {
        commit('SET_USER_INFO', data);
      })
      .catch(error => {
        console.log("user info", error);
      })
  },

  GET_USER_RESULT({ commit }, user) {
    setUser(user)
      .then(({ data }) => {
        commit('SET_USER', data);
      })
      .catch(error => {
        console.log("회원 가입 실패" + error);
      })
  }

}