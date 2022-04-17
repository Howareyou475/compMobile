import React, { useEffect, useState } from 'react'
import { StyleSheet, Image, View, Text, ScrollView } from 'react-native'
import { getCollectionById } from '../https/collectionHttps'

const Detail = props => {
	const { id } = props.route.params
	const [detail, setDetail] = useState({
		title: '',
		context: '',
		category: ''
	})

	useEffect(() => {
		fetchData()
	}, [])

	const fetchData = () => {
		setTimeout(async () => {
			const { data } = await getCollectionById(id)
			const { title, context, category } = data
			setDetail({ title, context, category })
		}, 1500)
	}
	return (
		<View style={styles.root}>
			<Image
				style={styles.img}
				source={require('../assets/lok-yiu-cheung-o6k0ZH1eOwg-unsplash.jpg')}
				resizeMode="cover"
			/>
			<Text style={styles.title}>{detail.title}</Text>

			<View style={styles.textContainer}>
				<ScrollView>
					<Text style={styles.content}>{detail.context}</Text>
				</ScrollView>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	root: {
		padding: 20
	},
	img: {
		width: '100%',
		height: 260,
		borderRadius: 15
	},
	title: {
		width: '100%',
		textAlign: 'center',
		marginTop: 30,
		fontSize: 20,
		letterSpacing: 4
	},
	textContainer: {
		maxHeight: 300,
		marginTop: 20,
		padding: 35
	},
	content: {
		color: '#8B8383',
		letterSpacing: 2,
		fontSize: 17
	}
})

export default Detail
