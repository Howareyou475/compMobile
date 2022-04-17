const express = require('express')
const cors = require('cors')
const userRoutes = require('./router/user')
const collectionsRoutes = require('./router/collection')
const bodyParser = require('body-parser')

const app = express()
require('./model/index')
app.use(cors())
app.use(express.json())
app.use(
	bodyParser.urlencoded({
		extended: true
	})
)
app.use(bodyParser.json())

app.get('/api/v1/health', (req, res) => {
	res.send('API is healthy')
})
app.use(userRoutes)
app.use(collectionsRoutes)
const PORT = 8081

app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`)
})
