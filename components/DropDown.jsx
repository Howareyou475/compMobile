import React, { useState, useEffect } from 'react'
import {
	Modal,
	View,
	StyleSheet,
	Picker,
	Image,
	TouchableOpacity
} from 'react-native'

const Dropdown = props => {
	const { open, options, onchangeEvent, dropDownValue, onClose } = props

	const renderOptions = () => {
		return options?.map(op => {
			const { id, value } = op
			return <Picker.Item key={id} label={value} value={value} />
		})
	}

	return (
		<Modal visible={open} animationType="fade" animated transparent>
			<View style={styles.root}>
				<View style={styles.pickerContainer}>
					<TouchableOpacity style={styles.close} onPress={onClose}>
						<Image
							style={styles.closeIcon}
							source={require('../assets/close.png')}
						/>
					</TouchableOpacity>

					<Picker
						selectedValue={dropDownValue}
						onValueChange={itemValue => onchangeEvent(itemValue)}
					>
						{renderOptions()}
					</Picker>
				</View>
			</View>
		</Modal>
	)
}

const styles = StyleSheet.create({
	root: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-end',
		backgroundColor: 'rgba(0,0,0,0.5)'
	},
	pickerContainer: {
		height: 200,
		width: '100%',
		backgroundColor: '#ffffff'
	},

	closeIcon: {
		marginLeft: 10,
		width: 20,
		height: 20
	}
})

export default Dropdown
