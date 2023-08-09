const express = require('express'),
    router = express.Router();

const service = require('./service.js')

router.get('/', async (req, res) => {
    res.send('Home')
})

router.get('/users', async (req, res) => {
    const users = await service.getAllUsers()
    res.send(users)
})

router.post('/addUsers', async (req, res) => {
    const user =
        await service.addUsers(req.body)
            // .then(
            // )
            .catch(
                res.status(400).json('Could not add user')
            )
    res.status(200).json('User added successfully'+ user)
})


router.post('/getStatusCount', async (req, res) => {
    const count = await service.getStatusCount(req.body.uid)
    if (count.lenght == 0) {
        res.status(404).json('No candidate found under given user : ' + req.body.uid)
    } else {
        res.send(count)
    }
})
module.exports = router;