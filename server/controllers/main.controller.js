import model from '../models/main.model.js';
const ctr =  {
	mainPage: async (req, res) => {
		const data = await model.find().sort({_id: -1});
		res.send(data);
	}
}

module.exports = ctr;