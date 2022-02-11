import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { CColor, wp } from './Style'

export default function Header(props: any) {
	const { navigation, route } = props
	console.log(route)
	return (
		<View style={styles.headerWrap}>
			<View>
				<Text>{route.name}</Text>
			</View>
			<View style={styles.buttonsWrap}>
				<View>
					<TouchableOpacity onPress={() => navigation.push('Settings')}>
						<Icon name='cog-outline' size={wp(8)} color={CColor.black} />
					</TouchableOpacity>
				</View>
				<View>
					<TouchableOpacity onPress={() => navigation.push('Cart')}>
						<Icon name='cart' size={wp(8)} color={CColor.black} />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	headerWrap: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		flex: 1,
		alignItems: 'center'
	},
	buttonsWrap: {
		flexDirection: 'row'
	}
})
