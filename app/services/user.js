const usersDb = require('../users-db').data;

async function all() {
    return usersDb;
}
async function getUser(userId) {
    return usersDb.find(e => { return e.id === userId });
}

async function getSubordinates(userId) {
    return usersDb.filter(e => { return e.managerId === userId });
}

module.exports = {
    all,
    getUser,
    getSubordinates
}