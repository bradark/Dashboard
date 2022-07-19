const {Client, Intents} = require('discord.js');
const token = 'OTk1NDk0MDAwNjA3ODk5NjY5.Gs9PKf.N7Fr5A95vPxV6XOSwaVOa7LX3EoyM7iRv6y9YE';
const serverID = '800205268410695700';
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MEMBERS] });

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
            console.log(roles);
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
}