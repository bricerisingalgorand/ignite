const axios = require('axios')

APP_SERVICE_URL = 'http://app-service-toronto-hackathon-1811157952.us-east-2.elb.amazonaws.com'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['Accept'] = 'Content-Type'

export function createFund(fund, callback) {
  axios.post(`${APP_SERVICE_URL}/fund`, fund)
        .then((result) => {
            callback(result, null);
        })
        .catch((error) => {
          callback(null, error);
        });
}

export function claimFund(fundId, callback) {
  axios.put(`${APP_SERVICE_URL}/claim-fund`, {
    fundId: fundId
  }).then((result) => {
      callback(result, null);
    })
    .catch((error) => {
      callback(null, error);
    });
}

export function reclaimFund(fundId, investerAddress, callback) {
  axios.put(`${APP_SERVICE_URL}/reclaim-fund`, {
    fundId: fundId,
    investerAddress: investerAddress,
  }).then((result) => {
      callback(result, null);
    })
    .catch((error) => {
      callback(null, error);
    });
}

export function listFunds(callback) {
  axios.get(`${APP_SERVICE_URL}/fund-list`).then(
    (result) => {
      callback(result, null);
    })
    .catch((error) => {
      callback(null, error);
    });
}

export function getFund(fundId, callback) {
  axios.get(`${APP_SERVICE_URL}/fund/${fundId}`).then(
    (result) => {
      callback(result, null);
    })
    .catch((error) => {
      callback(null, error);
    });
}

export function investInFund(investment, callback) {
  axios.put(
    `${APP_SERVICE_URL}/investment`,
    investment,
  ).then((result) => {
      callback(result, null);
    })
    .catch((error) => {
      callback(null, error);
    });
}

export function investmentBuilder(fundId, investorAddress, investmentAmount) {
  return {
    fundId: fundId,
    investorAddress: investorAddress,
    investmentAmount: investmentAmount,
  }
}

export function fundBuilder(name, description, timelimit, goalAmount, receiverAddress) {
  startDate = Date.now();
  return {
    name: name,
    description: description,
    startDate: startDate,
    endDate: startDate + timelimit,
    closeoutDate: (startDate + timelimit).setFullYear(startDate.getFullYear() + 1),
    goalAmount: goalAmount,
    receiverAddress: receiverAddress,
  };
}
