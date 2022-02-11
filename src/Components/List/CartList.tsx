import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CColor, wp } from '../../Global/Style'

interface CartListType {
	title: string
	count: number
}

export default function CartList(props: CartListType) {
	const { title, count } = props

	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.name}>Name: {title}</Text>
			</View>
			<View>
				<Text style={styles.quantity}>Quantity: {count}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		borderBottomWidth: 1,
		paddingVertical: wp(4)
	},
	name: {
		fontSize: wp(4),
		fontWeight: '500',
		color: CColor.blue
	},
	quantity: {
		fontSize: wp(4),
		fontWeight: '800',
		color: CColor.green
	}
})
