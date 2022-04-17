import React, { useState, useEffect } from 'react'
import {
	View,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Text
} from 'react-native'
import Dropdown from '../components/DropDown'
import Input from '../components/Input'
import CustButton from '../components/Button'
import { addCollection } from '../https/collectionHttps'
import Layout from '../components/Layout'

const Add = props => {
	const { navigation } = props
	const [dropDownValue, SetDropDownValue] = useState('Food')
	const [showDropdown, setShowDropdown] = useState(false)
	const [collectionDetail, setCollectionDetail] = useState({
		title: '',
		category: '',
		context: ''
	})
	const dropDownOption = [
		{ id: 1, value: 'Food' },
		{ id: 2, value: 'Animal' },
		{ id: 3, value: 'Views' }
	]

	useEffect(() => {
		console.log(collectionDetail)
	}, [collectionDetail])

	const optionsValueHandler = selectedValue => {
		SetDropDownValue(selectedValue)
		setCollectionDetail({
			...collectionDetail,
			category: selectedValue
		})
	}

	const modalHandler = () => {
		setShowDropdown(false)
	}

	const add = async () => {
		await addCollection(collectionDetail)
		navigation.navigate('Collection')
	}

	const change = (value, type) => {
		setCollectionDetail({
			...collectionDetail,
			[type]: value
		})
	}

	return (
		<View style={styles.root}>
			<Input
				placeholder="Title"
				onChangeEvent={value => change(value, 'title')}
			/>
			<TouchableOpacity
				style={styles.dropdown}
				onPress={() => {
					setShowDropdown(true)
				}}
			>
				<Text style={styles.dropdownText}>Select categories</Text>
			</TouchableOpacity>
			<TextInput
				style={styles.textArea}
				underlineColorAndroid="transparent"
				placeholder="Type something"
				placeholderTextColor="grey"
				numberOfLines={10}
				multiline={true}
				onChangeText={value => change(value, 'context')}
			/>
			<CustButton
				text={'ADD'}
				customerStyle={styles.add}
				onClickHandler={add}
			/>
			<Dropdown
				open={showDropdown}
				options={dropDownOption}
				dropDownValue={dropDownValue}
				onchangeEvent={optionsValueHandler}
				onClose={modalHandler}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	root: {
		padding: 20,
		position: 'relative'
	},
	textArea: {
		height: 150,
		justifyContent: 'flex-start',
		backgroundColor: '#ffffff',
		borderRadius: 21,
		padding: 20,
		marginTop: 60
	},
	dropdown: {
		width: '100%',
		height: 45,
		backgroundColor: '#ffffff',
		borderRadius: 21,
		justifyContent: 'center'
	},
	dropdownText: {
		paddingLeft: 20,
		color: 'grey'
	},
	add: {
		width: '100%',
		height: 45,
		marginTop: 50
	}
})

export default Add
