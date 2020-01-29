const express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
const webServerConfig = require('./config');

const userService = require('./app/services/user');

let httpServer;

function initialize() {
  return new Promise((resolve, reject) => {

    var schema = buildSchema(`
      type User {
        id: String,
        userName: String,
        firstName: String,
        lastName: String,
        managerId: String
      }

      type Query {
        user(userId: Int): User
        subordinates(userId: Int): [User]
      }
    `);

    // The root provides a resolver function for each API endpoint
    var root = {
      user: async ({ userId }) => {
        return await userService.getUser(userId);
      },

      subordinates: async ({ userId }) => {
        return await userService.getSubordinates(userId);
      },
    };
    const app = express();
    app.use('/graphql', graphqlHTTP({
      schema: schema,
      rootValue: root,
      graphiql: true,
    }));

    httpServer = app.listen(webServerConfig.port)
      .on('listening', () => {
        console.log(`Web server is listening to the port: ${webServerConfig.port}`);
        resolve();
      })
      .on('error', err => {
        reject(err);
      });
  });
}

function close() {
  return new Promise((resolve, reject) => {
    httpServer.close((err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
}

module.exports = {
  initialize, close
}