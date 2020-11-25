const ExampleModel = require('../models/ExampleModel')

class ExampleController {
  async example(request, response) {
    return response.json({ message: 'esse é o controller de exemplo' })
  }

  async usingModel(request, response) {
    const { name, age, course } = request.body

    const user = new ExampleModel(name, age, course);

    return response.json(user)
  }
}

module.exports = new ExampleController();