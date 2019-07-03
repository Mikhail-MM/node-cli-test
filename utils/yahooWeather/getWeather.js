module.exports = async (oAuthInstance, formatOpts) => {
    oAuthInstance.get(
        'https://weather-ydn-yql.media.yahoo.com/forecastrss?location=sunnyvale,ca&format=json',
        null,
        null,
        function (err, data, result) {
            if (err) {
                console.log(err)
            } else {
                require('./formatWeather')(data, formatOpts)
            }
    });
}