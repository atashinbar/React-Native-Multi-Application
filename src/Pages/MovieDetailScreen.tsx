import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Layout from '../Global/Layout'
import { CColor, wp } from '../Global/Style'
import { RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { MovieDataType } from '../Utils/Types'
type RootStackParamList = {
	MovieDetail: {
		movieData: MovieDataType
	}
}
interface MovieDetailScreenType {
	navigation: NativeStackNavigationProp<RootStackParamList, 'MovieDetail'>
	route: RouteProp<
		{
			params: {
				movieData: MovieDataType
			}
		},
		'params'
	>
}
export default function MovieDetailScreen(props: MovieDetailScreenType) {
	const { route, navigation } = props
	const { movieData } = route.params
	const { overview, poster_path, release_date, title } = movieData

	useEffect(() => {
		navigation.setOptions({ title: title })
	}, [])

	return (
		<Layout>
			<View style={styles.headDetails}>
				<View style={styles.imgWrapper}>
					<Image
						style={styles.img}
						source={{
							uri: `https://image.tmdb.org/t/p/w500/${poster_path}`
						}}
					/>
				</View>
				<View style={styles.detailsWrapper}>
					<Text style={styles.detailsHeadText}>Movie Name:</Text>
					<Text style={styles.detailsValueText}>{title}</Text>
					<View style={styles.detailsDivider} />
					<Text style={styles.detailsHeadText}>Movie Date:</Text>
					<Text style={styles.detailsValueText}>{release_date}</Text>
				</View>
			</View>
			<View style={styles.overviewWrapper}>
				<Text style={styles.overviewText}>{overview}</Text>
			</View>
		</Layout>
	)
}

const styles = StyleSheet.create({
	container: {},
	headDetails: {
		height: wp(40),
		flexDirection: 'row'
	},
	imgWrapper: {
		flex: 3
	},
	detailsWrapper: {
		flex: 5,
		justifyContent: 'center',
		paddingLeft: wp(4)
	},
	overviewWrapper: {
		marginTop: wp(4)
	},
	overviewText: {
		fontSize: wp(5),
		textAlign: 'justify',
		lineHeight: wp(7),
		color: CColor.black
	},
	img: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain'
	},
	detailsHeadText: {
		fontSize: wp(5),
		fontWeight: 'bold',
		color: CColor.black
	},
	detailsValueText: {
		fontSize: wp(4),
		fontWeight: 'bold',
		color: CColor.blue
	},
	detailsDivider: {
		backgroundColor: CColor.purpule,
		marginVertical: wp(4),
		height: 1,
		width: '100%'
	}
})
