import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useSelector } from 'react-redux'
import { rootReducerType } from '../../Redux/Reducers'
import { CColor, wp } from '../Style'

export default function HeaderRight(props: any) {
	const { navigation } = props
	const count = useSelector((state: rootReducerType) => state.cart.count)
	return (
		<View style={styles.buttonsWrap}>
			<View style={styles.buttonsSection}>
				<TouchableOpacity
					onPress={() => navigation.push('Cart')}
					style={{ paddingLeft: wp(3) }}>
					<Icon name='cart' size={wp(6)} color={CColor.black} />
					<Text style={styles.cartCount}>{count}</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.buttonsSection}>
				<TouchableOpacity onPress={() => navigation.push('Settings')}>
					<Icon name='cog-outline' size={wp(6)} color={CColor.black} />
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	buttonsWrap: {
		flexDirection: 'row'
	},
	buttonsSection: {
		marginLeft: wp(2)
	},
	cartCount: {
		backgroundColor: 'red',
		color: '#fff',
		position: 'absolute',
		left: 2,
		top: -5,
		width: wp(4),
		height: wp(4),
		fontSize: wp(3),
		textAlign: 'center'
	}
})
