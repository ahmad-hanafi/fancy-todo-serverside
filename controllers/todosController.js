const { Todo } = require('../models')

class TodosController {
    static showAll(req,res,next) {
        Todo.findAll({
            where: {
                UserId: req.currentUser.id  
            },
            order: ['createdAt']
        })
        .then(task => {
            res.status(200).json(task)
        })
        .catch(err => {
            console.log(err)
            next({
                code: 500,
                message: "Internal server error"
            })
            // res.status(500).json({ message: "Internal server error", detailError: err })
        })
    }

    static addPost(req,res,next) {
      const newTodo = {
          title: req.body.title,
          description: req.body.description,
          due_date: req.body.due_date,
          UserId: req.currentUser.id
      }
      Todo.create(newTodo)
      .then(data => {
          res.status(201).json(data)
      })
      .catch(err => {
          if(err.message) {
              console.log(err.message)
              next({
                  code: 400,
                  message: err.message
              })
            //   res.status(400).json({ message: err})
          }
          else {
            next({
                code: 500,
                message: err
            })
            //   res.status(500).json({ message: err})
          }
      })
    }

    static findId(req,res,next) {
        Todo.findOne({
            where: {
                id: +req.params.id
            }
        })
        .then(task => {
            res.status(200).json(task)
        })
        .catch(err => {
            next({
                code: 404,
                message: "Error, Data Not Found",
            })
            // res.status(404).json({ message: "Error, Data Not Found", detailError: err })
        })
    }

    static update(req,res,next) {
        Todo.update(req.body, {
            where: {
                id: +req.params.id
            },
            returning: true
        })
        .then(data => {
            res.status(200).json({message: "Succeess Update", data})
        })
        .catch(err => {
            // console.log(err)
            next({
                code: 404,
                message: "Data not Found"
            })
        })
    }

    static updateOne(req,res,next) {
        Todo.update({status: req.body.status}, {
            where: {
                id : +req.params.id
            },
            returning: true
        })
        .then(task => {
            console.log("masuk sini gan")
            res.status(200).json(task)
            
        })
        .catch(err => {
            next({
                code: 404,
                message: "Data not Found"
            })
            res.status(404).json({ message: "Error, Not Found", detailError: err })
        })
    }

    static delete(req,res,next) {
        Todo.destroy({
            where: {
                id: +req.params.id
            }
        })
        .then(task => {
            res.status(200).json({ message: "todo success to delete"})
        })
        .catch(err => {
            next({
                code: 404,
                message: "Data not Found"
            })
            res.status(404).json({ message: "Error, Not Found", detailError: err })
        })
    }
}

module.exports = TodosController