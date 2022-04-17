import React, { useState, useEffect } from 'react'
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ScrollView
} from 'react-native'
import Card from '../components/Card'
import Dropdown from '../components/DropDown'
import Layout from '../components/Layout'
import { collection } from '../https/collectionHttps'

const Collection = props => {
	const { navigation } = props
	const [collectionList, setCollectionList] = useState([])
	const [showDropdown, setShowDropdown] = useState(false)
	const [dropDownValue, SetDropDownValue] = useState('All')

	const dropDownOption = [
		{ id: 1, value: 'All' },
		{ id: 2, value: 'Food' },
		{ id: 3, value: 'Animal' },
		{ id: 4, value: 'Views' }
	]

	useEffect(() => {
		fetchAllCollection()
	}, [dropDownValue])

	const fetchAllCollection = async () => {
		setTimeout(async () => {
			const { data } = await collection(dropDownValue)
			setCollectionList(data)
		}, 1500)
	}

	const renderCollectionList = () => {
		if (collectionList.length > 0) {
			return collectionList?.map(cl => (
				<Card openPage={openDetailPage} detail={{ ...cl }} />
			))
		}
	}

	const optionsValueHandler = selectedValue => {
		SetDropDownValue(selectedValue)
	}

	const modalHandler = () => {
		setShowDropdown(false)
	}

	const openDetailPage = id => {
		navigation.navigate('Detail', {
			id
		})
	}
	return (
		<Layout navigation={navigation}>
			<View style={styles.root}>
				<View style={styles.header}>
					<Text style={styles.headerText}>Welcome back</Text>
				</View>
				<TouchableOpacity
					style={styles.filter}
					onPress={() => {
						setShowDropdown(true)
					}}
				>
					<Text style={styles.filterText}>Filter:</Text>
				</TouchableOpacity>
				<Dropdown
					open={showDropdown}
					options={dropDownOption}
					dropDownValue={dropDownValue}
					onchangeEvent={optionsValueHandler}
					onClose={modalHandler}
				/>

				<View style={styles.cardContainer}>
					<ScrollView>{renderCollectionList()}</ScrollView>
				</View>
			</View>
		</Layout>
	)
}

const styles = StyleSheet.create({
	root: {
		position: 'relative'
	},
	header: {
		width: '100%',
		height: 100,
		backgroundColor: '#F9BC73',
		borderRadius: 36,
		padding: 30
	},
	headerText: {
		color: '#ffffff'
	},
	filter: {
		width: 100,
		borderRadius: 30,
		padding: 10,
		marginTop: 30,
		borderWidth: 1,
		borderColor: '#8B8383',
		paddingLeft: 15
	},
	filterText: {
		color: '#C4C4C4',
		fontSize: 15,
		letterSpacing: 2
	},
	cardContainer: {
		width: '100%',
		marginTop: 30,
		maxHeight: 400
	},
	add: {
		position: 'absolute',
		bottom: -60,
		right: 20
	}
})

export default Collection
