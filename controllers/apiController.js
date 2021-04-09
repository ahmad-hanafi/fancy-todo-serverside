const axios = require('axios')

class apiController {
    static weather(req,res,next) {
        const location = 'Jakarta'
        const apikey = process.env.API_KEY1

        axios({
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}&units=metric`
        })
        .then( response => {
            res.status(200).json(response.data)
        })
        .catch( err => {
            res.status(500).json({ message: err})
        })
    }

    static kanyeQuote(req,res,next) {
        axios({
            method: 'get',
            url: 'https://api.kanye.rest'
        })
        .then((response) => {
            const quote = response.data.quote
            res.status(200).json(quote)
        })
        .catch( err => {
            res.status(500).json({ message: err})
        })
    }

    static boredApi(req,res,next) {
        axios({
            method: 'get',
            url: 'https://www.boredapi.com/api/activity?type=recreational&&price=0.0'
        })
        .then((response) => {
            // console.log(response.data.activity)
            res.status(200).json(response.data.activity)
        })
        .catch( err => {
            res.status(500).json({ message: err})
        })
    }

}

module.exports = apiController