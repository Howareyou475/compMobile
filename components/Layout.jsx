import React from 'react'
import { View, StyleSheet } from 'react-native'
import NavBar from './NavBar'

const Layout = props => {
	const { children, navigation } = props
	return (
		<>
			<View style={styles.root}>{children}</View>
			<NavBar style={styles.nav} navigation={navigation} />
		</>
	)
}
const styles = StyleSheet.create({
	root: {
		padding: 30,
		position: 'relative'
	},
	nav: {
		position: 'absolute',
		bottom: 20
	}
})

export default Layout
