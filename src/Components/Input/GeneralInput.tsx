import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { CColor, wp } from '../../Global/Style'
import { textInputKeyboardTypeString } from '../../Utils/Types'
interface GeneralInputType {
	value: string
	onChangeText: (v: string) => void
	placeholder?: string
	multiline?: string
	keyboardTypeString?: textInputKeyboardTypeString
	extraStyles?: object
	autoCapitalize?: string
}
function GeneralInput(props: GeneralInputType) {
	const {
		value,
		onChangeText,
		placeholder,
		multiline,
		keyboardTypeString,
		extraStyles
	} = props
	console.log(extraStyles)
	return (
		<TextInput
			placeholder={placeholder}
			autoCapitalize='none'
			autoCorrect={false}
			value={value}
			onChangeText={onChangeText}
			multiline={multiline ? true : false}
			textAlignVertical={multiline ? 'top' : 'center'}
			numberOfLines={multiline ? 6 : 1}
			keyboardType={keyboardTypeString ? keyboardTypeString : 'default'}
			style={[
				{
					height: multiline ? null : wp(13),
					paddingTop: multiline ? wp(4) : null
				},
				styles.input,
				extraStyles
			]}
		/>
	)
}
export { GeneralInput }

const styles = StyleSheet.create({
	container: {
		padding: wp(5)
	},
	input: {
		borderWidth: 1,
		borderRadius: wp(2),
		paddingHorizontal: wp(4),
		fontSize: wp(4),
		backgroundColor: CColor.white,
		marginBottom: 20,
		paddingVertical: 0
	}
})
