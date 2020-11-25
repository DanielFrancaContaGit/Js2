const { listen } = require('./app');
const app = require('./app');

app.listen('3333', () => {
  console.log('Application running on port 3333');
})

