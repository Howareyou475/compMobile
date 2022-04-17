import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Items from '../components/AccountPage/Items'

const Account = props => {
	const { navigation } = props

	const logoutHandler = () => {
		navigation.navigate('Home')
	}
	const openCollection = () => {
		navigation.navigate('Collection')
	}

	return (
		<View style={styles.root}>
			<TouchableOpacity onPress={logoutHandler}>
				<Image style={styles.logout} source={require('../assets/logout.png')} />
			</TouchableOpacity>

			<View style={styles.content}>
				<Image style={styles.logo} source={require('../assets/Logo.png')} />
				<Text style={styles.title}>Let's find some memories!</Text>
				<Items
					icon={require('../assets/collection.png')}
					text={'Collection'}
					onClickEvent={openCollection}
				/>
				<Items icon={require('../assets/promotion.png')} text={'Collection'} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	root: {
		padding: 30
	},
	logout: {
		width: 20,
		height: 20
	},
	content: {
		width: '100%',
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column'
	},
	logo: {
		width: 130,
		height: 130
	},
	title: {
		marginTop: 10,
		width: '100%',
		textAlign: 'left',
		color: '#F4C88D',
		letterSpacing: 4,
		fontSize: 20,
		marginBottom: 60
	}
})

export default Account
