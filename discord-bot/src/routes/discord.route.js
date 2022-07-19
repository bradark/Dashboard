const { getAllUsers,
        getAllRoles,
        giveUserRole,
        takeUserRole,
        createInviteLink, 
        getAllChannels,
           } = require('./discord.controller');
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

router.get('/getAllChannels', async (req, res) => {
    await getAllChannels().then((channels) => {
        res.json(channels);
    })
});

router.get('/giveUserRole', async (req, res) => {
    await giveUserRole().then((result) => {
        res.json({
            status: 'role added'
        });
    })
});

router.get('/getInviteLink', async (req, res) => {
    await createInviteLink().then((link) => {
        res.json({
            invite_link: link
        });
    });
});

router.get('/takeUserRole', async (req, res) => {
    await takeUserRole().then((result) => {
        res.json({
            status: 'role removed'
        });
    })
});

module.exports = router;