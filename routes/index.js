const router = require('express').Router()
const UserController = require('../controllers/userController')
const todosController = require('../controllers/todosController')
const apiController = require('../controllers/apiController')
const { authenticate, authorize } = require('../middlewares/auth')

router.get('/', (req, res) => {
    res.send('Hello Fancy Todo!')
  })
router.post('/register', UserController.register) // done
router.post('/login', UserController.login) // done
router.post('/loginGoogle', UserController.google)
router.get('/weather', apiController.weather)
router.get('/kanyeQuote', apiController.kanyeQuote)
router.get('/boredapi', apiController.boredApi)

router.use(authenticate)

router.get('/todos', todosController.showAll) // done
router.post('/todos', todosController.addPost) // done

router.get('/todos/:id', authorize, todosController.findId) // done
router.put('/todos/:id', authorize, todosController.update)  // done
router.patch('/todos/:id', authorize, todosController.updateOne) // done
router.delete('/todos/:id', authorize, todosController.delete) // done


module.exports = router