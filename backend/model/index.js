const mongoose = require('mongoose')

//database connection
mongoose
	.connect(
		'mongodb+srv://uat-admin:comp123@cluster0.lucml.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
		{
			useNewUrlParser: true,
			useUnifiedTopology: true
		}
	)
	.then(result => console.log('database connected'))
	.catch(err => console.log('oops, connection error', err))

//exports model
module.exports = {
	User: mongoose.model('User', require('./user')),
	Collection: mongoose.model('Collections', require('./collection'))
}
