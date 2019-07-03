module.exports = (args) => {
    const ora = require('ora');
    // const spinner = ora().start();
    const oAuthInstance = require('../utils/yahooWeather/YahooOAuthInstance')();
    require('../utils/yahooWeather/getWeather')(oAuthInstance, {forecast: true});

  }