const axios = require("axios");

module.exports = axios.create({
    baseURL: 'https://dummyjson.com',
    withCredentials: true,
});