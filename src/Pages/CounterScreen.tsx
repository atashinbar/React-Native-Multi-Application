import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { GeneralButton } from '../Components'
import { buttonBackgroundEnum } from '../Utils/Types'
interface CounterScreenType {
	navigation: any
}
export default function CounterScreen(props: CounterScreenType) {
	const { navigation } = props
	const [counter, setCounter] = useState<number>(0)
	return (
		<View style={style.container}>
			<GeneralButton title='increase' onPress={() => setCounter(counter + 1)} />
			<GeneralButton
				title='decrease'
				onPress={() => setCounter(counter <= 0 ? counter : counter - 1)}
				disable={counter <= 0 ? true : false}
			/>
			<Text style={style.text}>Counter: {counter >= 0 ? counter : 0}</Text>

			<View style={{ flexDirection: 'row' }}>
				<GeneralButton
					type={buttonBackgroundEnum.navigationButton}
					style={{ flex: 1 }}
					title='Go Back!'
					onPress={() => navigation.goBack()}
				/>
				<GeneralButton
					style={{ flex: 1 }}
					title='Go to Home!'
					onPress={() => navigation.push('Home')}
				/>
				<GeneralButton
					style={{ flex: 1 }}
					title='Go to UserList!'
					onPress={() => navigation.push('List')}
				/>
			</View>
		</View>
	)
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20
	},
	text: {
		fontSize: 30,
		fontWeight: 'bold'
	}
})
