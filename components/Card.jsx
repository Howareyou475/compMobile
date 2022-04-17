import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const Card = props => {
	const { openPage, detail } = props
	const { title, _id } = detail

	return (
		<View style={styles.root}>
			<View>
				<Image
					style={styles.img}
					resizeMode="cover"
					source={require('../assets/lok-yiu-cheung-o6k0ZH1eOwg-unsplash.jpg')}
				/>
			</View>
			<View style={styles.detailContainer}>
				<Text style={styles.detailText}>{title}</Text>
				<TouchableOpacity
					style={styles.detailView}
					onPress={() => openPage(_id)}
				>
					<Text style={styles.viewText}>View More</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	root: {
		width: '100%',
		height: 200,
		backgroundColor: '#E7D9C8',
		borderRadius: 31,
		shadowColor: 'rgba(0, 0, 0, 0.1)',
		shadowOffset: { width: 1, height: 4 },
		shadowOpacity: 0.8,
		overflow: 'hidden',
		marginBottom: 40,
		position: 'relative'
	},
	img: {
		width: '100%',
		height: 125
	},
	detailContainer: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'row',
		padding: 10
	},
	detailText: {
		color: '#ffffff',
		fontSize: 20,
		letterSpacing: 10,
		marginTop: 10,
		marginLeft: 10,
		width: '50%'
	},
	detailView: {
		marginTop: 6,
		backgroundColor: '#ffffff',
		height: 40,
		borderRadius: 10,
		paddingLeft: 20,
		paddingRight: 20
	},
	viewText: {
		color: '#ADADAD',
		fontSize: 14,
		letterSpacing: 3,
		lineHeight: 40
	}
})
export default Card
