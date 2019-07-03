const axios = require('axios')

module.exports = async () => {
    const url = `https://api.ipdata.co?api-key=${process.env.GEOLOCATION_API_KEY}`
    console.log(url);
    const results = await axios({
        method: 'get',
        url,
    })
    console.log('Status:', results.statusCode);
    console.log('Headers:', JSON.stringify(results.headers));
    console.log(results.data)
}