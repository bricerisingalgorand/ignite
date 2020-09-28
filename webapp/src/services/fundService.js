const axios = require('axios')
var JSONbig = require('json-bigint');

const APP_SERVICE_URL = 'http://localhost:8090/crowdfund'
//axios.defaults.headers.common['Accept'] = 'application/json'
//axios.defaults.headers.common['Content-Type'] = 'application/json'

const CREATOR_ADDRESS = "TB6RLTKS2ZOJDM53253MXFLBOLHAB35EKVFGNBPACLHKOWGV7L3GTLY43A"

const getFund = function (fundId, callback) {
  axios.get(`${APP_SERVICE_URL}/fund/${fundId}`).then(
    (result) => {
      callback(result.data, null);
    })
    .catch((error) => {
      callback(null, error);
    });
}

const getBalance = function(fundId, callback) {
  getFund(fundId, (fund, error) => {
    if (fund) {
      axios.get(`http://localhost:8090/algod/account/${fund.escrow.address}`).then(
        (result) => {
          callback(result.data.amount);
        },
        (error) => {
          callback(null, error);
        }
      )
    }
    else {
      callback(null, error);
    }
  })
}

const createFund = function (fund, callback) {
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

const claimFund = function (fundId, callback) {
  axios.put(`${APP_SERVICE_URL}/claim`, {
    fundId: fundId
  }).then((result) => {
      callback(result.data, null);
    })
    .catch((error) => {
      callback(null, error);
    });
}

const reclaimFund = function (fundId, investerAddress, callback) {
  axios.put(`${APP_SERVICE_URL}/reclaim`, {
    fundId: fundId,
    investerAddress: investerAddress,
  }).then((result) => {
      callback(result.data, null);
    })
    .catch((error) => {
      callback(null, error);
    });
}

const listFunds = function (callback) {
  axios.get(`${APP_SERVICE_URL}/fund-list`).then(
    (result) => {
      callback(result.data, null);
    })
    .catch((error) => {
      callback(null, error);
    });
}

const investInFund = function (investment, callback) {
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

const investmentBuilder = function (fundId, investorAddress, investmentAmount) {
  return {
    fundId: fundId,
    note: '',
    investorAddress: investorAddress,
    investmentAmount: investmentAmount,
  }
}

const fundBuilder = function (name, description, timelimit, goalAmount, receiverAddress) {
  const startDate = Date.now();
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

module.exports = {
  getFund,
  getBalance,
  createFund,
  claimFund,
  reclaimFund,
  listFunds,
  investInFund,
  investmentBuilder,
  fundBuilder,
}
