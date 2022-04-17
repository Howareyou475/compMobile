const mongoose = require('mongoose')
// const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: [true, 'please enter your username'],
		unique: true
	},
	password: {
		type: String,
		minlength: [2, 'minimum password length is 6 characters']
	},
	email: {
		type: String,
		required: [true, 'please enter your email'],
		unique: true
	}
})

// userSchema.pre('save', async function (next) {
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// userSchema.statics.login = async function (userInfor) {
// 	const { username, password } = userInfor
// 	const lookUpUser = await this.findOne({ username })
// 	if (lookUpUser) {
// 		return lookUpUser
// 		// const result = await bcrypt.compare(password, lookUpUser.password);
// 		// if (result) {
// 		//   return lookUpUser;
// 		// }
// 	}
// 	throw Error('username or password is incorrect')
// }

module.exports = userSchema
