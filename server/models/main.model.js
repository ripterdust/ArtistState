import { Schema, model } from 'mongoose';

const mainModel = new Schema({
	title: {type: String}
});

module.exports = model('model', mainModel);