const { Router } = require('express');
const exampleRoute = require('./exampleRoute');

const router = Router();

router.use(exampleRoute);

module.exports = router;