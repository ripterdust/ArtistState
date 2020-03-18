import userModel from '../models/User.model.js';
const ctr =  {
	mainPage: async (req, res) => {
		res.send('Main page');
	}
}

module.exports = ctr;