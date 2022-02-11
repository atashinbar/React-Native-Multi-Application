import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CColor, wp } from '../Style'

export default function HeaderTitle(props: any) {
	const { route } = props
	return (
		<View>
			<Text style={styles.title}>{route.name}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	title: {
		color: CColor.purpule,
		fontSize: wp(5),
		fontWeight: 'bold'
	}
})
