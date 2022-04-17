import React from 'react'
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'

const NavBar = props => {
	const { navigation } = props

	return (
		<View style={styles.root}>
			<TouchableOpacity
				style={styles.itemContainer}
				onPress={() => navigation.navigate('Account')}
			>
				<Image style={styles.itemIcon} source={require('../assets/home.png')} />
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.itemContainer}
				onPress={() => navigation.navigate('Add')}
			>
				<Image style={styles.itemIcon} source={require('../assets/add.png')} />
			</TouchableOpacity>
			<TouchableOpacity style={styles.itemContainer}>
				<Image
					style={styles.itemIcon}
					source={require('../assets/detail.png')}
				/>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	root: {
		width: '100%',
		height: 80,
		position: 'absolute',
		bottom: 20,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row'
	},
	itemContainer: {
		width: 60,
		height: 60,
		margin: 20,
		borderRadius: 30,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	itemIcon: {
		width: 40,
		height: 40
	}
})

export default NavBar
