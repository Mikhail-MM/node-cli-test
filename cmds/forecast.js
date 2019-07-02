module.exports = (args) => {
    const OAuth = require('oauth');
    const header = {
        "X-Yahoo-App-Id": "your-app-id"
    };
    const oauthInstance = new OAuth.OAuth(
        null,
        null,
        process.env.YAHOO_CONSUMER_KEY,
        process.env.YAHOO_SECRET_KEY,
        '1.0',
        null,
        'HMAC-SHA1',
        null,
        header
    );
    oauthInstance.get(
        'https://weather-ydn-yql.media.yahoo.com/forecastrss?location=sunnyvale,ca&format=json',
        null,
        null,
        function (err, data, result) {
            if (err) {
                console.log(err);
            } else {
                console.log(data)
            }
    });
    console.log('tomorrow is rainy')
  }