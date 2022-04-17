import React from 'react'
import { TextInput, StyleSheet, View, Image } from 'react-native'

const Input = props => {
	const { imgUrl, placeholder, onChangeEvent } = props
	return (
		<View style={styles.container}>
			<Image style={styles.icon} source={imgUrl} />
			<TextInput
				style={styles.input}
				placeholder={placeholder}
				onChangeText={e => onChangeEvent(e)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: '#ffffff',
		marginBottom: 30,
		borderRadius: 21,
		height: 45,
		alignItems: 'center'
	},
	icon: {
		marginLeft: 20
	},
	input: {
		paddingLeft: 20,
		height: '100%',
		width: '80%'
	}
})

export default Input
