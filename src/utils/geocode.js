const request = require('request')

const geocode = (address, callback) => {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${address}&key=cc441ea49fb949ed989d83a365d2f5ff`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.results.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            const {formatted,geometry} = body.results[0];
            callback(undefined, {
                latitude: geometry.lat,
                longitude: geometry.lng,
                location: formatted
            })
        }
    })
}

module.exports = geocode