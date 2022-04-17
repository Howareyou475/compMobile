import React, { useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Input from '../components/Input'
import CustButton from '../components/Button'
import { registerHttp } from '../https/authHttps.js'

const Register = props => {
	const { navigation } = props
	const [userDetail, setUserDetail] = useState({
		username: '',
		password: '',
		email: ''
	})

	const registerHandler = async () => {
		try {
			await registerHttp(userDetail)
			navigation.navigate('Account')
		} catch (e) {
			console.log(123)
		}
	}

	const change = (value, type) => {
		setUserDetail({
			...userDetail,
			[type]: value
		})
	}

	return (
		<View style={styles.container}>
			<Image style={styles.logo} source={require('../assets/Logo.png')} />
			<Image style={styles.title} source={require('../assets/LogoTitle.png')} />
			<View style={styles.form}>
				<Input
					imgUrl={require('../assets/account.png')}
					placeholder="Email"
					onChangeEvent={value => change(value, 'email')}
				/>
				<Input
					imgUrl={require('../assets/Vector.png')}
					placeholder="Username"
					onChangeEvent={value => change(value, 'username')}
				/>
				<Input
					imgUrl={require('../assets/Vector.png')}
					placeholder="Password"
					onChangeEvent={value => change(value, 'password')}
				/>
				<CustButton
					text={'SIGN UP'}
					customerStyle={styles.login}
					onClickHandler={() => registerHandler()}
				/>
			</View>
			<Text style={styles.signUpString}>
				Back to {''}
				<Text
					style={styles.signUp}
					onPress={() => {
						navigation.navigate('Login')
					}}
				>
					Login in
				</Text>
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		flexDirection: 'column',
		alignItems: 'center'
	},
	logo: {
		width: 150,
		height: 150,
		marginBottom: 20
	},
	login: {
		marginTop: 10
	},
	form: {
		marginTop: 50,
		width: '80%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between'
	},
	signUpString: {
		color: '#C4C4C4',
		textAlign: 'center',
		letterSpacing: 0.8,
		width: 200,
		marginTop: 100
	},
	signUp: {
		color: '#EBB36F'
	}
})

export default Register
