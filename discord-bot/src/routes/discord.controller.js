const {Client, Intents} = require('discord.js');
const token = 'OTk1NDk0MDAwNjA3ODk5NjY5.Gs9PKf.N7Fr5A95vPxV6XOSwaVOa7LX3EoyM7iRv6y9YE';
const allIntents = new Intents(32767);
// [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS]
const client = new Client({ intents: allIntents });

/* BOT INVITE LINK => https://discord.com/oauth2/authorize?client_id=995494000607899669&permissions=8&scope=bot */  

/* FOR TESTING */ 
const serverID = '800205268410695700';
const lilCpapID = '503957762586443786';
const ceoRoleID = '832681422320828476';
const channelID = '800205268410695703';

async function getAllUsers() {
    const guild = await client.guilds.fetch(serverID);
    return new Promise((resolve, reject) => {
        guild.members.fetch().then((members) => {
            let users = [];
            members.forEach(member => {
                users.push({user: `${member.user.username}#${member.user.discriminator}`});
            })
            resolve(users);
        }).catch((err) => {
            reject(err);
        }); 
    }); 
}

async function getAllRoles() {
    const guild = await client.guilds.fetch(serverID);
    return new Promise((resolve, reject) => {
        guild.roles.fetch().then((roles) => {
            let roleList = [];
            roles.forEach(role => {
                roleList.push({role: `${role.name}`, roleID: `${role.id}`});
            })
            resolve(roleList);
        }).catch((err) => {
            reject(err);
        }); 
    }); 
}

async function getAllChannels() {
    const guild = await client.guilds.fetch(serverID);
    return new Promise((resolve, reject) => {
        guild.channels.fetch().then((channels) => {
            let channelList = [];
            channels.forEach(channel => {
                channelList.push({
                    channelName: channel.name,
                    channelID: channel.id,
                });
            });
            resolve(channelList);
        });
    });
}

async function giveUserRole() {
    const guild = await client.guilds.fetch(serverID);
    return new Promise((resolve, reject) => {
        guild.members.fetch(lilCpapID).then((mem) => {
            guild.roles.fetch(ceoRoleID).then((role) => {
                mem.roles.add(role);
                resolve('Role Added');
            });
        });
    });
}

async function takeUserRole() {
    const guild = await client.guilds.fetch(serverID);
    return new Promise((resolve, reject) => {
        guild.members.fetch(lilCpapID).then((mem) => {
            guild.roles.fetch(ceoRoleID).then((role) => {
                mem.roles.remove(role);
                resolve('Role Removed');
            });
        });
    });
}

async function createInviteLink() {
    const guild = await client.guilds.fetch(serverID);
    return new Promise((resolve, reject) => {
        guild.channels.fetch(channelID).then((inviteChannel) => {
            inviteChannel.createInvite({
                maxAge: 10*60*100,
                maxUses: 1,
            }).then((invite) => {
                resolve(`https://discord.gg/${invite.code}`);
            });
        });
    });
}

async function login() {
    await client.login(token);
}

async function main() {
    await login();
}

client.login(token);

module.exports = {
    getAllUsers,
    getAllRoles,
    getAllChannels,
    giveUserRole,
    takeUserRole,
    createInviteLink,
}