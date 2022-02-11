import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { CColor, wp } from '../../Global/Style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { GeneralButton } from '../Button/GeneralButton'
import { buttonBackgroundEnum } from '../../Utils/Types'

interface SearchBarType {
	onChangeText: (value: string) => void
	value: string
	onSearchButtonClick: () => void
	placeholder?: string
}

export default function SearchBar(props: SearchBarType) {
	const { onChangeText, value, onSearchButtonClick, placeholder } = props
	return (
		<View style={styles.constainer}>
			<View style={styles.iconWrapper}>
				<Icon name='magnify' size={wp(8)} color={CColor.black} />
			</View>
			<View style={styles.inputWrapper}>
				<TextInput
					value={value}
					onChangeText={onChangeText}
					placeholder={placeholder ? placeholder : 'Search...'}
					style={styles.input}
					autoCapitalize='none'
					autoCorrect={false}
				/>
			</View>
			<View style={styles.buttonWrapper}>
				<GeneralButton
					onPress={onSearchButtonClick}
					title='submit'
					style={{ padding: 0, paddingVertical: 7 }}
					type={buttonBackgroundEnum.success}
				/>
			</View>
		</View>
	)
}

export { SearchBar }

const styles = StyleSheet.create({
	constainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: CColor.white,
		alignContent: 'center',
		height: wp(15),
		alignItems: 'stretch',
		marginBottom: wp(4)
	},
	iconWrapper: { flex: 1, justifyContent: 'center', alignItems: 'center' },
	inputWrapper: { flex: 4 },
	buttonWrapper: { flex: 2, justifyContent: 'center', alignItems: 'center' },
	input: {
		borderRadius: wp(2),
		paddingHorizontal: wp(1),
		fontSize: wp(4),
		backgroundColor: CColor.white,
		marginBottom: 20,
		paddingVertical: 0,
		height: wp(15)
	}
})
