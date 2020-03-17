// Imports
import Router from 'express';
import ctr from '../controllers/main.controller';

// Initializations
const app = Router();

// Routes
app.get('/', ctr.mainPage);

// Exports
module.exports = app;