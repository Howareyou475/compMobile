import { http } from './index.js'

export const collection = category => {
	return http(`/collection/${category}`, {})
}

export const addCollection = detail => {
	return http('/addCollection', {
		method: 'POST',
		requestData: { collectionDetail: detail }
	})
}

export const getCollectionById = id => {
	console.log('id', id)
	return http(`/getCollection/${id}`, {})
}
