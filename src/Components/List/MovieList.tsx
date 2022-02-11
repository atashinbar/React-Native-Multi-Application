import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { CColor, wp } from '../../Global/Style'
interface MovieListType {
	imageSrc: string
	title: string
	onPressMovie: () => void
}
function MovieList(props: MovieListType) {
	const { imageSrc, title, onPressMovie } = props
	return (
		<TouchableOpacity onPress={onPressMovie} activeOpacity={0.8}>
			<View style={styles.container}>
				<View>
					<Image source={{ uri: imageSrc }} style={styles.img} />
				</View>
				<View style={styles.detailsWrapper}>
					<Text style={styles.text}>{title}</Text>
				</View>
			</View>
		</TouchableOpacity>
	)
}
export { MovieList }
const styles = StyleSheet.create({
	container: {
		width: wp(43),
		marginBottom: wp(4),
		backgroundColor: CColor.white,
		paddingVertical: wp(4),
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
	detailsWrapper: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		fontSize: wp(4),
		color: CColor.black,
		marginTop: wp(2)
	},
	img: {
		width: '100%',
		height: wp(40),
		resizeMode: 'contain'
	}
})
