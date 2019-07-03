module.exports = (data, opts) => {
    const pojo = JSON.parse(data)
    if (opts.today) {
        console.log(pojo.current_observation.condition)
    } else if (opts.forecast) {
        console.log(pojo.forecasts)
    }
}