import React, { useState } from 'react'
import {
	Image,
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	ImageSourcePropType
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { CColor, wp } from '../../Global/Style'
interface ProductListType {
	imageSrc: ImageSourcePropType
	title: string
	increaseButton: () => void
	decreaseButton: () => void
}
export default function ProductList(props: ProductListType) {
	const { imageSrc, title, increaseButton, decreaseButton } = props

	return (
		<View style={styles.productWrapper}>
			<View>
				<Image source={imageSrc} style={styles.img} />
				<Text style={styles.contentWrapper}>{title}</Text>
			</View>
			<View style={styles.buttonsWrapper}>
				<View>
					<TouchableOpacity onPress={increaseButton}>
						<Icon name='plus-box' size={wp(10)} color={CColor.black} />
					</TouchableOpacity>
				</View>
				<View>
					<TouchableOpacity onPress={decreaseButton}>
						<Icon name='minus-box' size={wp(10)} color={CColor.black} />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	img: {
		width: '100%',
		height: wp(40),
		resizeMode: 'cover',
		borderTopLeftRadius: wp(4),
		borderTopRightRadius: wp(4)
	},
	productWrapper: {
		width: wp(43),
		marginBottom: wp(4),
		backgroundColor: CColor.white,
		paddingBottom: wp(4),
		borderRadius: wp(4),
		shadowColor: CColor.black,
		shadowOffset: {
			width: 0,
			height: 4
		},
		shadowOpacity: 0.3,
		shadowRadius: 4.65,
		elevation: 6
	},
	contentWrapper: {
		textAlign: 'center',
		marginVertical: wp(2),
		fontSize: wp(4),
		fontWeight: 'bold'
	},
	buttonsWrapper: {
		flexDirection: 'row',
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'space-around',
		marginVertical: wp(1)
	}
})
