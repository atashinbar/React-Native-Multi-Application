import React, { useState, useReducer } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { GeneralInput } from '../Components'
import { CColor, wp } from '../Global/Style'
import { textInputKeyboardTypeString } from '../Utils/Types'
const reducer = (state, action) => {
	switch (action.type) {
		case 'changeFirstName':
			return { ...state, firstName: action.payload }
		case 'changeLastName':
			return { ...state, lastName: action.payload }
		case 'changeEmail':
			return { ...state, email: action.payload }
		case 'changePhone':
			return { ...state, phone: action.payload }
		case 'changeAddress':
			return { ...state, address: action.payload }
		default:
			return state
	}
}
const initialState = {
	firstName: '',
	lastName: '',
	email: '',
	phone: '',
	address: ''
}

export default function TextScreen() {
	const [state, dispatch] = useReducer(reducer, initialState)
	return (
		<View style={styles.container}>
			<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
				<GeneralInput
					value={state.firstName}
					onChangeText={(text) =>
						dispatch({
							type: 'changeFirstName',
							payload: text
						})
					}
					placeholder='First Name'
					extraStyles={{
						flex: 1
					}}
				/>
				<GeneralInput
					value={state.lastName}
					onChangeText={(text) =>
						dispatch({
							type: 'changeLastName',
							payload: text
						})
					}
					placeholder='Last Name'
					extraStyles={{
						flex: 1
					}}
				/>
			</View>

			<GeneralInput
				value={state.email}
				onChangeText={(text) =>
					dispatch({
						type: 'changeEmail',
						payload: text
					})
				}
				placeholder='Email'
				keyboardTypeString={textInputKeyboardTypeString.emailAddress}
			/>
			<GeneralInput
				value={state.phone}
				onChangeText={(text) =>
					dispatch({
						type: 'changePhone',
						payload: text
					})
				}
				placeholder='Phone'
				keyboardTypeString={textInputKeyboardTypeString.numberPad}
			/>
			<GeneralInput
				value={state.address}
				onChangeText={(text) =>
					dispatch({
						type: 'changeAddress',
						payload: text
					})
				}
				placeholder='Address'
				multiline='true'
			/>

			<View>
				{state.firstName || state.lastName ? (
					<View style={styles.formDataWrap}>
						<Text style={styles.formDataLabel}>Full Name:</Text>
						<Text style={styles.formData}>
							{state.firstName + ' ' + state.lastName}
						</Text>
					</View>
				) : null}
				{state.email ? (
					<View style={styles.formDataWrap}>
						<Text style={styles.formDataLabel}>Email:</Text>
						<Text style={styles.formData}>{state.email}</Text>
					</View>
				) : null}
				{state.phone ? (
					<View style={styles.formDataWrap}>
						<Text style={styles.formDataLabel}>Phone:</Text>
						<Text style={styles.formData}>{state.phone}</Text>
					</View>
				) : null}
				{state.address ? (
					<View style={styles.formDataWrap}>
						<Text style={styles.formDataLabel}>Address:</Text>
						<Text style={styles.formData}>{state.address}</Text>
					</View>
				) : null}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: wp(5)
	},
	input: {
		borderWidth: 1,
		borderRadius: wp(2),
		paddingHorizontal: wp(4),
		fontSize: wp(4),
		height: wp(13),
		backgroundColor: CColor.white,
		marginBottom: 20
	},
	formDataWrap: {
		marginBottom: wp(5)
	},
	formDataLabel: {
		fontSize: wp(5),
		color: CColor.black,
		fontWeight: 'bold'
	},
	formData: {
		color: CColor.green,
		fontSize: wp(6)
	}
})
