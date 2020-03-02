/*=========================================================================================
  File Name: moduleAuthActions.js
  Description: Auth Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
import BaseAPI, { handleAPIError } from "../../api";
const API = new BaseAPI("Users");
//const APII = new BaseAPI("churches");

// import router from "@/router";
// import acl from "@/acl/acl";

function processSession(data, userSession = {}) {
  let { user } = data;
  console.log({ data });
  return {
    ...userSession,
    ...user
  };
}

export default {
  login({ commit, state, dispatch }, payload) {
    let acl = payload.acl;
    console.log({ payload });
    API.post("/login", payload.userDetails)
      .then(({ data }) => {
        // console.log(data)
        let { id, user, role } = data;

        let userSession = {
          ...processSession(data),
          ...user[role.name][0],
          roles: role.name
        };
        // console.log({userSession})
        // state.userSession = userSession;
        commit("UPDATE_USER_SESSION", userSession);
        commit("UPDATE_SESSION_TOKEN", id);
        commit("UPDATE_USER_ROLE", userSession.roles);
        acl.change(userSession.roles);
        payload.notify({
          title: "Success!",
          text: "Welcome! login successful.",
          icon: "info",
          color: "success",
          position: "top-right"
        });
        if (payload.closeAnimation) {
          payload.closeAnimation();
        }
        window.location.reload();
        // payload.navigate.push({
        //     path: "/",
        // });
      })
      .catch(error => handleAPIError(error, payload));
  },
  async register({ commit, state, dispatch }, payload) {
    // console.log({ "register": payload })
    return API.create(payload.group, payload.data)
      .then(resp => {
        // console.log(resp)
        payload.notify({
          title: "Success!",
          text: "Your account has been created",
          icon: "info",
          color: "success",
          position: "top-right"
        });
        payload.navigate.push({
          name: "page-auth-success",
          params: {
            user: resp.data
          }
        });
      })
      .catch(error => handleAPIError(error, payload));
  },
  fetchProfile({ commit, state, dispatch }, payload) {
    return API.find(payload.id, payload.filter)
      .then(resp => {
        // console.log({ FetchProfile: resp.data });
        let userSession = {
          ...state.userSession,
          ...resp.data,
          roles: resp.data.roleType
        };
        // processSession(resp.data, state.userSession);
        console.log({ userSession });
        commit("UPDATE_USER_SESSION", userSession);
        // payload.notify({
        //   title: "Success!",
        //   text: "Profile has been updated!",
        //   icon: "info",
        //   color: "success",
        //   position: "top-right"
        // });
        // TODO::Update usersession with new data
      })
      .catch(error => handleAPIError(error, payload));
  },
  async fetchProfileByHandle({ commit, state, dispatch },payload) {
    return await API.getWhere(payload.group,payload.filter)
      .then(resp => {
        console.log({ ProfileData: resp.data });
        let ProfileData = {
        //   ...state.userSession,
          ...resp.data,
        };
        return ProfileData
        // console.log({ userSession });
      })
      .catch(error => console.log(error));
  },
  async updateProfile({ commit, state, dispatch }, payload) {
    // console.log({ upload: payload });
    return API.update(payload.group, payload.data)
      .then(resp => {
        // console.log(resp)
        payload.notify({
          title: "Success!",
          text: "Profile has been updated!",
          icon: "info",
          color: "success",
          position: "top-right"
        });
        // TODO::Update usersession with new data
      })
      .catch(error => handleAPIError(error, payload));
  },
  logout({ commit }, acl) {
    // console.log('Loging out')
    localStorage.removeItem("userRole");
    localStorage.removeItem("userInfo");
    acl.change("guest");
    commit("UPDATE_USER_ROLE", "guest");
    // router.replace('/');
    window.location.reload();
  },
  updateAuthenticatedUser({ commit }, payload) {
    commit("UPDATE_USER_SESSION", payload);
  }
};
