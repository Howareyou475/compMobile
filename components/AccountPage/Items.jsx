import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const Items = props => {
	const { icon, text, onClickEvent } = props
	return (
		<TouchableOpacity onPress={onClickEvent}>
			<View style={styles.root}>
				<Image style={styles.img} source={icon} resizeMode="contain" />

				<View style={styles.content}>
					<Text style={styles.itemText}>{text}</Text>
					<Image
						style={styles.arrow}
						source={require('../../assets/rightArrow.png')}
					/>
				</View>
			</View>
		</TouchableOpacity>
	)
}

export default Items

const styles = StyleSheet.create({
	root: {
		width: '90%',
		display: 'flex',
		flexDirection: 'row',
		marginBottom: 70,
		minHeight: 70
	},
	img: {
		width: 70,
		height: 70
	},
	content: {
		marginLeft: 27,
		width: '67%',
		borderBottomWidth: 1,
		position: 'relative',
		justifyContent: 'center',
		borderColor: '#585252'
	},
	itemText: {
		color: '#585252',
		fontSize: 15,
		letterSpacing: 4
	},
	arrow: {
		position: 'absolute',
		right: 0,
		top: '30%'
	}
})
