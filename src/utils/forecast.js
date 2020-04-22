const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=29db98abff6e2c48693da43ec7cac638&&units=imperial`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather[0].description + ' It is currently ' + body.current.temp + ' degress out. There is a ' + body.current.clouds + '% chance of rain.')
        }
    })
}

module.exports = forecast