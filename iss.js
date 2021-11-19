const request = require("request");

const fetchMyIP = function(callback) {
  request("https://api.ipify.org?format=json", (error, response, body) => {
    if (error) {
      return callback(error, null);
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const IP = JSON.parse(body).ip;

    callback(null, IP);
  });
};

const fetchCoordsByIP = function(ip, callback) {
  request("https://api.freegeoip.app/json/?apikey=db333400-48f0-11ec-af67-e7b1abfbdab5", (
    error,
    response,
    body
  ) => {
    if (error) {
      return callback(error, null);
    }

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const coords = {
      latitude: JSON.parse(body).latitude,
      longitude: JSON.parse(body).longitude
    };
    callback(null, coords);
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP };
