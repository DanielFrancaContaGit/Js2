const express = require('express');
const cors = require('cors');
const router = require('./routers');

class Application {
  constructor() {
    this.express = express();
    this.middlewares();
    this.client();
    this.routes();
  }

  middlewares() {
    this.express.use(cors());
    this.express.use(express.json({ limit: '5mb' }));
  }

  routes() {
    this.express.use(router);
  }

  client() {
    this.express.get('/', (req, res) => {
      res.json({
        App: 'App do js 2',
        Status: 'Development',
        Author: '@CITi-UFPE',
      });
    });
  }
}

module.exports = new Application().express;