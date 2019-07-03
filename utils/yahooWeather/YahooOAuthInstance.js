module.exports = () => {
    const OAuth = require('oauth');
    const header = {
        "X-Yahoo-App-Id": "your-app-id"
    };
    const oAuthInstance = new OAuth.OAuth(
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
    return oAuthInstance
}