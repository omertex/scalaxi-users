const usersDb = require('../users-db').data;

async function getAll() {
    return usersDb.map(e => {
        return {
            id: e.id,
            userName: e.userName,
            firstName: e.firstName,
            lastName: e.lastName,
            managerId: e.managerId
        }
    });
}

module.exports = {
    getAll
}