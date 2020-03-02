/*=========================================================================================
  File Name: moduleAuthMutations.js
  Description: Auth Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

export default {
  UPDATE_USER_SESSION(state, user) {
    localStorage.setItem("userInfo", JSON.stringify(user));
    localStorage.setItem("userRole", user.roles);
    state.userSession = user;
    state.userRole = user.roles;
  },
  UPDATE_USER_ROLE(state, val) {
    state.userRole = val;
    localStorage.setItem("userRole", val);
  },
  UPDATE_SESSION_TOKEN(state, val) {
    state.userToken = val;
    localStorage.setItem("userToken", val);
  }
};
