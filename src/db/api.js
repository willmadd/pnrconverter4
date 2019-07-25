const axios = require("axios");

// const backendBaseUrl = "https://api.pnrdev.com";

const backendBaseUrl = "http://localhost:8000";

// const backendBaseUrl = "https://api.pnrconverter.com"

exports.fullPNRQuery = PNR => {
  let params = new URLSearchParams();
  params.append("pnr", PNR);
  return axios.post(`${backendBaseUrl}/api/convert`, params);
};

exports.logout = () => {
  let token = localStorage.getItem("userToken");
  if (token) {
    axios
      .get(`${backendBaseUrl}/auth/logout`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {})
      .catch(error => {
        console.log(error);
      });
  }
};

exports.updateUser = user => {
  let token = localStorage.getItem("userToken");
  if (token) {
    return axios({
      method: "put",
      url: `${backendBaseUrl}/api/auth/update`,
      data: { user },

      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
};

exports.updateAllUserDetails = user => {
  let token = localStorage.getItem("userToken");
  if (token) {
    return axios({
      method: "put",
      url: `${backendBaseUrl}/api/auth/updatealluserdetails`,
      data: { user },

      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
};

exports.getToken = id => {
  let token = localStorage.getItem("userToken");
  return axios.get(`${backendBaseUrl}/api/auth/gettoken/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

exports.signUp = user => {
  return axios.post(`${backendBaseUrl}/api/auth/signup`, user);
};

exports.tokenActivate = token => {
  return axios.get(`${backendBaseUrl}/auth/signup/activate/${token}`);
};

exports.userSignIn = user => {
  return axios.post(`${backendBaseUrl}/api/auth/login`, user);
};

exports.getPlans = () => {
  let token = localStorage.getItem("userToken");
  return axios.get(`${backendBaseUrl}/api/auth/plans`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

exports.getBraintreeToken = () => {
  let token = localStorage.getItem("userToken");
  return axios.get(`${backendBaseUrl}/api/auth/braintree/token`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

exports.submitPayload = (payload, plan, user_id) => {
  let token = localStorage.getItem("userToken");
  return axios.post(`${backendBaseUrl}/api/auth/subscription`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    data: {
      nonce: payload.nonce,
      plan,
      user_id
    }
  });
};

exports.updateSubscription = (plan, user_id) => {
  let token = localStorage.getItem("userToken");
  return axios.post(`${backendBaseUrl}/api/auth/updatesubscription`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    data: {
      plan,
      user_id
    }
  });
};

exports.getPlanBySlug = slug => {
  let token = localStorage.getItem("userToken");
  return axios.get(`${backendBaseUrl}/api/auth/planbyslug/${slug}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

exports.cancelSubscription = user_id => {
  let token = localStorage.getItem("userToken");
  return axios.post(`${backendBaseUrl}/api/auth/cancelsubscription`, {
    headers: {
      Authorization: `Bearer ${token}`
    },
    data: {
      user_id
    }
  });
};

exports.getUserData = () => {
  let token = localStorage.getItem("userToken");
  return axios.get(`${backendBaseUrl}/api/auth/user`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

exports.writeQueries = (flight, options, format) => {
  let params = new URLSearchParams();
  params.append("input", flight);
  params.append("options", JSON.stringify(options));
  params.append("format", JSON.stringify(format));

  // return axios.post('https://www.pnrconverter.com/write-file.php', params);
  return axios.post(`${backendBaseUrl}/api/write-file`, params);
};

exports.sendPasswordReset = (email, captcha) => {
  return axios.post(`${backendBaseUrl}/api/password/create`, {
    email,
    captcha
  });
};

exports.passwordReset = token => {
  return axios.get(`${backendBaseUrl}/api/password/find/${token}`);
};

exports.submitNewPassword = user => {
  return axios.post(`${backendBaseUrl}/api/password/reset`, {
    data: {
      user
    }
  });
};

exports.memberSubmitForm = (name, email, agency, contact_us) => {
  return axios.put(`${backendBaseUrl}/api/emailsend`, {
    name,
    email,
    agency,
    contact_us
  });
};

exports.getInvoices = stripeid => {
  let token = localStorage.getItem("userToken");
  return axios.get(`${backendBaseUrl}/api/auth/getinvoices/${stripeid}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

exports.getSingleInvoice = (user_id, invoice_id) => {
  let token = localStorage.getItem("userToken");
  return axios(
    `${backendBaseUrl}/api/auth/getinvoice/${user_id}/${invoice_id}`,
    {
      method: "GET",
      responseType: "blob", //Force to receive data in a Blob Format,
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
};

exports.getNextInvoiceDate = (plan, user_id) => {
  let token = localStorage.getItem("userToken");
  return axios({
    method: "post",
    url: `${backendBaseUrl}/api/auth/getnextpaymentdate`,
    data: {
      plan,
      user_id
    },
    headers: {
      Authorization: "Bearer " + token
    }
  });
};

exports.processPayment = (token, amount, user_id, plan) => {
  return axios({
    method: "post",
    url: `${backendBaseUrl}/api/auth/stripesubscription`,
    data: {
      token,
      amount,
      user_id,
      plan,
    },
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": `application/json`
    }
  });
}

exports.updateCardDetails = (stripeToken, user_id) => {
  let token = localStorage.getItem("userToken");
  return axios({
    method: "post",
    url: `${backendBaseUrl}/api/auth/updatecard`,
    data: { stripeToken, user_id },
    headers: {
      Authorization: "Bearer " + token
    }
  });
};
