import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { CColor } from '../../Global/Style'
import { buttonBackgroundEnum } from '../../Utils/Types'
interface GeneralButtonType {
	onPress: () => void
	title: string | undefined
	disable?: boolean
	style?: object
	type?: buttonBackgroundEnum
}
export function GeneralButton(props: GeneralButtonType) {
	const { onPress, title, disable, style, type } = props
	const buttonExtraStyle = () => {
		if (type == 'danger' || disable) {
			return CColor.red
		} else if (type == 'success') {
			return CColor.green
		} else if (type == 'primary') {
			return CColor.blue
		} else {
			return CColor.blue
		}
	}
	return (
		<TouchableOpacity
			disabled={disable}
			style={[{ backgroundColor: buttonExtraStyle() }, styles.buttonStyle, style]}
			onPress={onPress}>
			<Text style={[styles.textStyle, disable && { color: CColor.black }]}>
				{title}
			</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	buttonStyle: {
		borderWidth: 1,
		margin: 10,
		padding: 20,
		borderRadius: 10,
		alignSelf: 'stretch',
		textAlign: 'center',
		alignItems: 'center',
		borderColor: CColor.white,
		shadowColor: CColor.black,
		shadowOffset: {
			width: 0,
			height: 1
		},
		shadowOpacity: 0.22,
		shadowRadius: 2.22,
		elevation: 3
	},
	textStyle: {
		fontSize: 18,
		color: 'white'
	}
})
