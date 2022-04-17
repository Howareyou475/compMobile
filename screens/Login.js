import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Input from '../components/Input'
import CustButton from '../components/Button'
import { loginHttp } from '../https/authHttps.js'

const Login = props => {
	const { navigation } = props
	const [userDetail, setUserDetail] = useState({
		username: '',
		password: ''
	})

	const loginHandler = async () => {
		try {
			await loginHttp(userDetail)
			navigation.navigate('Account')
		} catch (e) {
			console.log(e.response)
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
					placeholder="Username"
					onChangeEvent={value => change(value, 'username')}
				/>
				<Input
					imgUrl={require('../assets/Vector.png')}
					placeholder="Password"
					onChangeEvent={value => change(value, 'password')}
				/>
				<CustButton
					text={'LOG IN'}
					customerStyle={styles.login}
					onClickHandler={() => loginHandler()}
				/>
			</View>
			<Text style={styles.signUpString}>
				Donn't have an account?Click{' '}
				<Text
					style={styles.signUp}
					onPress={() => {
						navigation.navigate('Register')
					}}
				>
					SIGN UP
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
		marginTop: 40
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

export default Login
