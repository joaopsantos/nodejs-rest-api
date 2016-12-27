var config = {};

config.mongodb = {};

config.server = {};
config.server.port = process.env.WEB_PORT || 9998;

config.mongodb.username = process.env.MONGODB_USERNAME || 'joao';
config.mongodb.password= process.env.MONGODB_PASSWORD || '123';
config.mongodb.host= process.env.MONGODB_HOST || '127.0.0.1';
config.mongodb.port = process.env.MONGODB_PORT || 27017;
config.mongodb.databaseName = process.env.MONGODB_NAME || 'test';

module.exports = config;

