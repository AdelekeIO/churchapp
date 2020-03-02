import axios from "axios";
const BASEURL = `http://deallus-dev-env.us-east-1.elasticbeanstalk.com/api/`;
export const handleAPIError = (error, payload) => {
  // console.log(error)
  if (error.response.data.error.details) {
    var errorMsg = error.response.data.error.details.messages;
    var errTemp = [];
    var keyHooks = Object.keys(errorMsg);
    Object.values(errorMsg).map((x, index) => {
      errTemp[index] = keyHooks[index] + " " + x[0];
      // console.log(index);
    });
    // console.log("error", errTemp);
    errTemp = Object.values(errTemp).join("<br>");
    payload.notify({
      title: "Error!",
      text: errTemp,
      icon: "error",
      color: "warning",
      position: "top-right"
    });
  } else {
    payload.notify({
      title: "Error!",
      text: `<span style="text-transform: capitalize;">${error.response.data
        .error.message || "An error occured, Please try again"}</span>`,
      icon: "error",
      color: "warning",
      position: "top-right"
    });
  }
};
export default class {
  remote = null;
  constructor(endpoint) {
    this.remote = axios.create({
      baseURL: `${BASEURL}${endpoint}`,
      withCredentials: false,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
  }

  fetchAll(filter = {}) {
    // console.log(this.remote.get(`?${JSON.stringify(filter)}`));
    return this.remote.get(`?filter=${JSON.stringify(filter)}`);
  }

  find(id, filter = {}) {
    // console.log(this.remote.get(`?${JSON.stringify(filter)}`));
    return this.remote.get(`${id}?filter=${JSON.stringify(filter)}`);
  }
  getOne(type, id, filter = {}) {
    // console.log(this.remote.get(`?${JSON.stringify(filter)}`));
    return this.remote.get(
      `${BASEURL}${type}/${id}?filter=${JSON.stringify(filter)}`
    );
  }
  getWhere(type, filter = {}) {
    // console.log(this.remote.get(`?${JSON.stringify(filter)}`));
    return this.remote.get(
      `${BASEURL}${type}/?filter=${JSON.stringify(filter)}`
    );
  }

  create(type, data) {
    // console.log(type,data)
    // console.log(this.remote.get(`?${JSON.stringify(filter)}`));
    return this.remote.post(`${BASEURL}${type}`, data);
  }
  update(type, data) {
    // console.log(type,data)
    // console.log(this.remote.get(`?${JSON.stringify(filter)}`));
    return this.remote.patch(`${BASEURL}${type}/${data.id}`, data);
  }

  post(path, data, filter = {}) {
    return this.remote.post(`${path}?filter=${JSON.stringify(filter)}`, data);
  }
}
