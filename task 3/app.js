const geocode = require("./geocode")
const forecast = require("./forecast")

const country = process.argv[2]

geocode(country, (error, data) => {
    console.log("ERROR : ", error)
    console.log("DATA  : ", data)

    if (data) {
        forecast(data.latitude, data.longtitude, (error, data) => {
            console.log("ERROR : ", error)
            console.log("DATA  : ", data)
        })
    } else {
        console.log("Data Entered have An Error")
    }

})

