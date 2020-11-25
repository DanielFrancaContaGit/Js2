const { Router } = require('express');
const ExampleController = require('../Controller/exampleController');

const router = Router();

router.route('/teste').get((request, response) => {
  return response.json({ message: "essa é uma rota de teste" })
});

router.route('/controller')
  .get(ExampleController.example)
  .post(ExampleController.usingModel);

router.route('/users')
  .get(ExampleController.exampleUser)

module.exports = router;