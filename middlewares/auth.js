const { verifyToken } = require('../helpers/jwt')
const { User, Todo } = require('../models')

const authenticate = (req,res, next) => {
    const verify = verifyToken(req.headers.access_token)
    if (!req.headers.access_token) {
        res.status(401).json({ message: "Unathororize !, Please Login First"})
    } else {
        User.findOne({
            where: {id: verify.id, email: verify.email}
        })
        .then(user => {
            if (!user) {
                res.status(401).json({ message: "Invalid access token"})    
            } else {
                req.currentUser = { id: user.id, email: user.mail}
                next()
            }
        })
        .catch(err => {
            res.status(500).json({ message: "Internal Server Error"})
        })
    }
}

const authorize = (req, res, next) => {
    Todo.findByPk(req.params.id)
        .then(data => {
            if (data) {
                let validUser = req.currentUser.id === data.UserId
                if (validUser) {
                    // console.log('masuk')
                    next()
                } else {
                    res.status(401).json({ message: "Unauthorize! Bukan punya anda !"})
                }
            } else {
                res.status(401).json({ message: "Data not found"})
            }
        })
        .catch(err => {
            console.log(err)
            res.status(400).json({ message: err.msg })
        })
}


module.exports = {
    authenticate,
    authorize
}