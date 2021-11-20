const request = require("request-promise-native");

const fetchMyIP = () => {
  return request("https://api.ipify.org?format=json");
};

const fetchCoordsByIP = (body) => {
  const IP = JSON.parse(body).ip;
  return request(`https://freegeoip.app/json/${IP}`);
};

const fetchISSFlyOverTimes = (body) => {
  const data = { latitude: JSON.parse(body).latitude, longitude: JSON.parse(body).longitude};
  const url = `http://api.open-notify.org/iss-pass.json?lat=${data.latitude}&lon=${data.longitude}`;
  return request(url);
}

const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const times = JSON.parse(data).response;
      return times;
    })
}

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation };
