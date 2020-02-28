const ora = require('ora')
const getWeather = require('../utils/weather')

module.exports = async (args) => {
    const spinner = ora().start()

    try {
        const location = args.location || args.l
        const weather = await getWeather(location)

        spinner.stop()

        console.log(`${location}天气:`)
        console.log(`${weather.text} | ${weather.temperature}摄氏度`)
    } catch (err) {
        spinner.stop()

        console.error(err)
    }
}