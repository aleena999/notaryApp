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
    try {
        const user = await service.addUsers(req.body);
        res.status(201).json({ message: 'User added successfully', user });
    } catch (error) {
        res.status(400).json({ message: 'Could not add user', error });
    }
})

router.get('/candidates', async (req, res) => {
    const candidates = await service.getAllCandidates()
    res.send(candidates)
})

router.post('/addCandidate', async (req, res) => {
    try {
        const candidate = await service.addCandidate(req.body);
        res.status(201).json({ message: 'Candidate added successfully', candidate });
    } catch (error) {
        res.status(400).json({ message: 'Could not add candidate', error });
    }
})

router.get('/candidateStatus', async (req, res) => {
    const candidateStatus = await service.getCandidateStatus()
    res.send(candidateStatus)
})

router.post('/addOrUpdateCandidateStatus', async (req, res) => {
    try {
        const result = await service.addOrUpdateCandidateStatus(req.body);
        if (result.insertId) {
            res.status(201).json({ message: 'Candidate Status added successfully', result });
        } else {
            res.status(200).json({ message: 'Candidate Status updated successfully', result });
        }
    } catch (error) {
        res.status(400).json({ message: 'Could not add or update candidate Status', error });
    }
})

router.post('/getStatusCount', async (req, res) => {
    try {
        const count = await service.getStatusCount(req.body)
        if (count.length != 0) {
            res.status(201).json(count);
        }
    } catch (error) {
        res.status(400).json({ message: 'No candidate found under given user', error });
    }
})
module.exports = router;