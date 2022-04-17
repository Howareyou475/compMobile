const { User } = require('../model')

exports.register = async (req, res, next) => {
	const { userInfo } = req.body
	try {
		const { _id } = await User.create({ ...userInfo })
		res.status(201).json({
			_id
		})
	} catch (err) {
		console.log(err)
		res.status(400).json('Make sure all the information is correct ')
	}
}

exports.login = async (req, res) => {
	const { userInfo } = req.body
	try {
		const { username, password } = userInfo
		const userDetail = await User.findOne({ username })
		if (userDetail) {
			if (userDetail.password === password) {
				res.status(201).json('ok')
			} else {
				res.status(400).json('wrong')
			}
		}
	} catch (err) {
		res.status(400).json('Username or Password is incorrect')
	}
}

exports.getAllUser = async (req, res, next) => {
	// const { users } = await User.find();
	// res.status(200).json({
	//   success: true,
	//   users,
	// });
}
