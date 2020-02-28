const axios = require('axios')
const KEY = 'KEY'

module.exports = async (location) => {

    const results = await axios({
        method: 'get',
        url: `https://api.seniverse.com/v3/weather/now.json?key=${KEY}&location=${location}&language=zh-Hans&unit=c`,

    })
    const now = results.data.results[0].now

    return now
}