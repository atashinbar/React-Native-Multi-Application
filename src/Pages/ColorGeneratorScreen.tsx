import React, { useState, useReducer } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { GeneralButton } from '../Components'
import { CColor, wp } from '../Global/Style'
import { buttonBackgroundEnum } from '../Utils/Types'
interface ColorGeneratorInitialStateType {
	red: number
	green: number
	blue: number
}
const reducer = (
	state: ColorGeneratorInitialStateType,
	action: { type: keyof ColorGeneratorInitialStateType; payload: number }
) => {
	switch (action.type) {
		case 'red':
			return state.red + action.payload > 255 || state.red + action.payload < 0
				? state
				: { ...state, red: state.red + action.payload }
		case 'green':
			return state.green + action.payload > 255 || state.green + action.payload < 0
				? state
				: { ...state, green: state.green + action.payload }
		case 'blue':
			return state.blue + action.payload > 255 || state.blue + action.payload < 0
				? state
				: { ...state, blue: state.blue + action.payload }
		default:
			return state
	}
}

const initialState: ColorGeneratorInitialStateType = {
	red: 0,
	green: 0,
	blue: 0
}

export default function ColorGeneratorScreen() {
	// const [red, setRed] = useState(0);
	const dNumber = 20
	// const ChangeRed = (unit) => {
	//     if (red + unit > 255 || red + unit < 0) {
	//         return;
	//     } else {
	//         setRed(red + unit);
	//     }
	// };

	const [state, dispatch] = useReducer(reducer, initialState)
	return (
		<View style={styles.container}>
			<Text>Change Red</Text>
			<GeneralButton
				onPress={() => dispatch({ type: 'red', payload: dNumber })}
				title='Increase Red'
				type={buttonBackgroundEnum.danger}
			/>
			<GeneralButton
				onPress={() => dispatch({ type: 'red', payload: -1 * dNumber })}
				title='Decrease Red'
				type={buttonBackgroundEnum.danger}
			/>
			<Text>Change Green</Text>
			<GeneralButton
				onPress={() => dispatch({ type: 'green', payload: dNumber })}
				title='Increase Green'
				type={buttonBackgroundEnum.success}
			/>
			<GeneralButton
				onPress={() => dispatch({ type: 'green', payload: -1 * dNumber })}
				title='Decrease Green'
				type={buttonBackgroundEnum.success}
			/>
			<Text>Change Blue</Text>
			<GeneralButton
				onPress={() => dispatch({ type: 'blue', payload: dNumber })}
				title='Increase Blue'
				type={buttonBackgroundEnum.primary}
			/>
			<GeneralButton
				onPress={() => dispatch({ type: 'blue', payload: -1 * dNumber })}
				title='Decrease Blue'
				type={buttonBackgroundEnum.primary}
			/>

			<View
				style={{
					justifyContent: 'center',
					alignItems: 'center',
					height: wp(40),
					width: wp(40),
					backgroundColor: `rgb(${state.red},${state.green},${state.blue})`
				}}>
				<Text
					style={{
						color: CColor.white,
						fontSize: wp(5)
					}}>{`rgb(${state.red},${state.green},${state.blue})`}</Text>
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		padding: wp(5)
	}
})
