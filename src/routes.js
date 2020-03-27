const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

//Ongs...
routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

// Casos...
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

// Casos específicos de uma ONG...
routes.get('/profile', ProfileController.index);

// Sessões...
routes.post('/sessions', SessionController.create);

module.exports = routes;
