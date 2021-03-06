import axios from 'axios'

const apiUrl = 'http://192.168.0.196:8081/api/v1'

const instance = axios.create({
	baseURL: apiUrl
})

export const http = async (
	endpoint,
	{ contentType, method, requestData, token, headers, ...customConfig }
) => {
	const config = {
		method,
		headers: {
			Authorization: token ? `${token}` : '',
			'Content-Type': contentType ? contentType : 'application/json'
		},
		data: requestData,
		...customConfig
	}
	const result = await instance(endpoint, { ...config })
	return result
}
