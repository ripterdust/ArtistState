import mongoose from 'mongoose';

mongoose.Primise = global.Promise;

const URI = 'mongodb://localhost:27017/artistState';
mongoose.connect(URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
	.then(console.log('Database connected'))
	.catch(err => console.log(err));