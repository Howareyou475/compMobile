import React from 'react'
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native'

const Home = props => {
	const { navigation } = props
	return (
		<View style={styles.container}>
			<Image style={styles.logo} source={require('../assets/Logo.png')} />
			<TouchableOpacity
				style={styles.entry}
				onPress={() => {
					navigation.navigate('Login')
				}}
			>
				<Image source={require('../assets/LogoTitle.png')} />
			</TouchableOpacity>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	logo: {
		marginTop: -150
	},
	entry: {
		padding: 10
	}
})

export default Home
