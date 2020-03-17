import model from '../models/main.model.js';
const ctr =  {
	mainPage: async (req, res) => {
		const data = model.find();
		res.send(model);
	}
}

module.exports = ctr;