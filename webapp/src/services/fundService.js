const axios = require('axios')
var JSONbig = require('json-bigint');

APP_SERVICE_URL = 'http://localhost:8090/crowdfund'
//axios.defaults.headers.common['Accept'] = 'application/json'
//axios.defaults.headers.common['Content-Type'] = 'application/json'

CREATOR_ADDRESS = "ZPWLV4EJSXMMFABIBGSM5IDVLDAJRSDS6OYXXFQZOFGLLBFDTWVB6LFUTA"

module.exports.createFund = function (fund, callback) {
  axios.post(`${APP_SERVICE_URL}/fund`, fund, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((result) => {
      callback(result.data, null);
    })
    .catch((error) => {
      callback(null, error);
    });
}

module.exports.claimFund = function (fundId, callback) {
  axios.post(`${APP_SERVICE_URL}/claim`, {
    fundId: fundId
  }).then((result) => {
      callback(result.data, null);
    })
    .catch((error) => {
      callback(null, error);
    });
}

module.exports.reclaimFund = function (fundId, investerAddress, callback) {
  axios.post(`${APP_SERVICE_URL}/reclaim`, {
    fundId: fundId,
    investerAddress: investerAddress,
  }).then((result) => {
      callback(result.data, null);
    })
    .catch((error) => {
      callback(null, error);
    });
}

module.exports.listFunds = function (callback) {
  axios.get(`${APP_SERVICE_URL}/fund-list`).then(
    (result) => {
      callback(result.data, null);
    })
    .catch((error) => {
      callback(null, error);
    });
}

module.exports.getFund = function (fundId, callback) {
  axios.get(`${APP_SERVICE_URL}/fund/${fundId}`).then(
    (result) => {
      callback(result.data, null);
    })
    .catch((error) => {
      callback(null, error);
    });
}

module.exports.investInFund = function (investment, callback) {
  axios.post(
    `${APP_SERVICE_URL}/investment`,
    investment,
  ).then((result) => {
      callback(result.data, null);
    })
    .catch((error) => {
      callback(null, error);
    });
}

module.exports.investmentBuilder = function (fundId, investorAddress, investmentAmount) {
  return {
    fundId: fundId,
    note: '',
    investorAddress: investorAddress,
    investmentAmount: investmentAmount,
  }
}

module.exports.fundBuilder = function (name, description, timelimit, goalAmount, receiverAddress) {
  startDate = Date.now();
  return JSONbig.stringify({
    name: name,
    description: description,
    startDate: new Date(startDate).toISOString(),
    endDate: new Date(startDate + timelimit).toISOString(),
    closeOutDate: new Date(startDate + timelimit + 1000000).toISOString(),
    goalAmount: goalAmount,
    receiverAddress: receiverAddress,
    creatorAddress: CREATOR_ADDRESS,
  });
}
