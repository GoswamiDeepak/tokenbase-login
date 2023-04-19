const router = require('express').Router();
const AuthController = require('../Controller/authContoller')
const UserController = require('../Controller/userController')
router.get('/', (req, res)=>{
    res.send("Welcome to Token Base api")
})

router.post('/register/',AuthController.register)
router.post('/login/', AuthController.login)



module.exports = router 