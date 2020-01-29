const usersDb = require('../users-db').data;

async function getUser(userId) {
    return usersDb.find(e => { return e.id === userId });
}

async function getSubordinates(userId) {
    return usersDb.filter(e => { return e.managerId === userId });
}

module.exports = {
    getUser,
    getSubordinates
}