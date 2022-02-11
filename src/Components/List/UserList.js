import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'

export function UserList(props) {
	const { name, lName, image, navigation } = props
	return (
		<View style={styles.container}>
			{image ? (
				<View style={styles.imageWrap}>
					<TouchableOpacity
						onPress={() => {
							alert(name)
						}}>
						<Image style={styles.imageStyle} source={image} />
					</TouchableOpacity>
				</View>
			) : null}
			<View>
				<Text style={styles.textStyle}>
					{name} {lName ? <Text style={styles.textStyle}>{lName}</Text> : null}
				</Text>
				<TouchableOpacity
					onPress={() =>
						navigation.push('Profile', {
							name: name,
							lName: lName,
							image: image
						})
					}>
					<Text style={styles.viewProfileStyle}>View Profile</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		borderWidth: 1,
		margin: 10,
		padding: 7,
		borderRadius: 7,
		flexDirection: 'row',
		borderColor: '#DFDFDF'
	},
	textStyle: {
		color: 'green',
		fontSize: 20
	},
	imageStyle: {
		width: 70,
		height: 70,
		borderRadius: 50
	},
	imageWrap: {
		marginRight: 10,
		overflow: 'visible'
	},
	viewProfileStyle: {
		color: '#A81DAC',
		marginTop: 10
	}
})
