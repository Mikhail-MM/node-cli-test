module.exports = (args) => {
    const oAuthInstance = require('../utils/yahooWeather/YahooOAuthInstance')();
    require('../utils/yahooWeather/getWeather')(oAuthInstance, {today: true});
}