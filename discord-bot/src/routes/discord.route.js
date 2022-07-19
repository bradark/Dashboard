const { getAllUsers,
        getAllRoles, } = require('./discord.controller');
const router = require('express').Router();

router.get('/getAllUsers', async (req, res) => {
    await getAllUsers().then((users) => {
        res.json(users);
    });
});

router.get('/getAllRoles', async (req, res) => {
    await getAllRoles().then((roles) => {
        res.json(roles);
    });
});

module.exports = router;