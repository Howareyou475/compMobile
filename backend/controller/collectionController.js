const { Collection } = require('../model')
const ObjectId = require('mongodb').ObjectId

exports.allCollection = async (req, res, next) => {
	const { category } = req.params
	let data

	if (category === 'All') {
		data = await Collection.find()
	} else {
		data = await Collection.find({ category })
	}
	res.status(200).json(data)
}

exports.addCollection = async (req, res) => {
	const { collectionDetail } = req.body
	try {
		const { _id } = await Collection.create({ ...collectionDetail })
		res.status(200).json(_id)
	} catch (e) {
		console.log(e)
	}
}

exports.getCollectionById = async (req, res) => {
	const { id } = req.params
	const data = await Collection.find({ _id: ObjectId(id) })
	res.status(200).json(data[0])
}
