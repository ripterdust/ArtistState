import express from 'express';
// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 8080);
import './lib/database';
// middlewares

// routes
app.use('/', require('./routes'));




// Server listening
app.listen(app.get('port'), console.log('Server on port: ', app.get('port')));