import React from 'react'
import { Button, StyleSheet, Pressable, Text } from 'react-native'

const CustButton = props => {
	const { text, customerStyle, onClickHandler } = props

	return (
		<Pressable
			style={[styles.root, { ...customerStyle }]}
			onPress={() => onClickHandler()}
		>
			<Text style={styles.text}>{text}</Text>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	root: {
		backgroundColor: '#E7D9C8',
		height: 52,
		justifyContent: 'center',
		borderRadius: 36,
		width: '100%'
	},
	text: {
		textAlign: 'center',
		letterSpacing: 3,
		color: '#ffffff'
	}
})

export default CustButton
