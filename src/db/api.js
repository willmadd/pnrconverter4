const axios = require("axios");

const backendBaseUrl = "http://localhost:8000";

exports.logout = () => {
  console.log("logout");

  let token = localStorage.getItem("userToken");
  if (token) {
    axios
      .get(`${backendBaseUrl}/api/auth/logout`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
};

exports.updateUser = user => {
  console.log("update");
  console.log(user);
  let token = localStorage.getItem("userToken");
  if (token) {
    axios({
      method: "put",
      url: `${backendBaseUrl}/api/auth/update`,
      data: { user },

      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
};

exports.getToken = (id) =>{
  let token = localStorage.getItem("userToken");
  return axios
  .get(`${backendBaseUrl}/api/auth/gettoken/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    data:{id}
  })

}