const peopleController = require('../controllers').people;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the People API!',
  }));

  app.post('/api/people', peopleController.create);
  app.get('/api/people', peopleController.list)
  app.delete('/api/people/:personId', peopleController.destroy)
};