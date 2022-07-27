const { getAllUsers,
        getAllRoles,
        giveUserRole,
        takeUserRole,
        createInviteLink, 
        getAllChannels,
        checkUserRole,
        getUserRoles,
        checkUserPermissions,
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

router.get('/checkUserRole', async (req, res) => {
    await checkUserRole(req.query.id).then((result) => {
        res.json({
            hasID: result
        });
    });
});

router.get('/getUserRoles', async (req, res) => {
    await getUserRoles().then((result) => {
        res.json({
            roles: result
        })
    })
})

router.get('/checkUserPermissions', async (req, res) => {
    await checkUserPermissions().then((result) => {
        res.json({
            permissions: result
        });
    });
})

module.exports = router;