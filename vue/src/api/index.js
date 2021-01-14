import axios from 'axios';

var headers = {
  'Content-Type': 'application/json',
  "Access-Control-Allow-Origin": "*"
}
const config = {
  baseUrl: 'http://localhost:8080'
}

function getData(url) {
  return axios.get(config.baseUrl + url);
}

function fetchUserInfo(username) {
  return axios.get(`${config.baseUrl}/user/${username}.json`);
}

function setUser(user) {
  console.log(user);
  return axios.post(`${config.baseUrl}/users`, user, { headers: headers });
}

export {
  getData,
  fetchUserInfo,
  setUser
}