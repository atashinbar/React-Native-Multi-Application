import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { GeneralButton, Switch } from '../../Components'
import { SettingsContext } from '../../Context/SettingsContext'
import Layout from '../../Global/Layout'
import { CColor, wp } from '../../Global/Style'
import { LanguageEnum, buttonBackgroundEnum, ButtonsEnum } from '../../Utils/Types'

export default function SettingsScreen() {
	const state = useContext(SettingsContext)
	const [counterIsOn, setCounterIsOn] = useState<boolean>(false)
	const [listIsOn, setListIsOn] = useState<boolean>(false)
	const [colorIsOn, setColorIsOn] = useState<boolean>(false)
	const [textIsOn, setTextIsOn] = useState<boolean>(false)
	const [moviesIsOn, setMoviesIsOn] = useState<boolean>(false)
	const [loginIsOn, setLoginIsOn] = useState<boolean>(false)
	return (
		<Layout>
			<View>
				<Text style={styles.switchContainerTitle}>Select Your Language:</Text>
				<View style={styles.langButtons}>
					<View style={styles.langButtonsWrap}>
						<GeneralButton
							type={
								LanguageEnum.en === state.settings.language
									? buttonBackgroundEnum.danger
									: undefined
							}
							title='English'
							onPress={() => state.saveLanguage(LanguageEnum.en)}
							style={{ margin: 0 }}
						/>
					</View>
					<View style={styles.langButtonsWrap}>
						<GeneralButton
							type={
								LanguageEnum.fa === state.settings.language
									? buttonBackgroundEnum.danger
									: undefined
							}
							title='Farsi'
							onPress={() => state.saveLanguage(LanguageEnum.fa)}
							style={{ margin: 0 }}
						/>
					</View>
				</View>
			</View>
			<View style={styles.switchContainer}>
				<Text style={styles.switchContainerTitle}>Enable or Disable Buttons</Text>
				<Switch
					label={ButtonsEnum.Counter}
					size='large'
					onSwitchClick={() => {
						setCounterIsOn(!counterIsOn)
						state.saveButtonsStatus('Counter', counterIsOn)
					}}
					isOn={
						state.settings.buttons.includes(ButtonsEnum.Counter)
							? true
							: false
					}
				/>
				<Switch
					label={ButtonsEnum.List}
					size='large'
					onSwitchClick={() => {
						setListIsOn(!listIsOn)
						state.saveButtonsStatus('List', listIsOn)
					}}
					isOn={
						state.settings.buttons.includes(ButtonsEnum.List) ? true : false
					}
				/>
				<Switch
					label={ButtonsEnum.Color}
					size='large'
					onSwitchClick={() => {
						setColorIsOn(!colorIsOn)
						state.saveButtonsStatus('ColorGenerator', colorIsOn)
					}}
					isOn={
						state.settings.buttons.includes(ButtonsEnum.Color) ? true : false
					}
				/>
				<Switch
					label={ButtonsEnum.Text}
					size='large'
					onSwitchClick={() => {
						setTextIsOn(!textIsOn)
						state.saveButtonsStatus('Text', textIsOn)
					}}
					isOn={
						state.settings.buttons.includes(ButtonsEnum.Text) ? true : false
					}
				/>
				<Switch
					label={ButtonsEnum.Movies}
					size='large'
					onSwitchClick={() => {
						setMoviesIsOn(!moviesIsOn)
						state.saveButtonsStatus('Movies', moviesIsOn)
					}}
					isOn={
						state.settings.buttons.includes(ButtonsEnum.Movies) ? true : false
					}
				/>
				<Switch
					label={ButtonsEnum.Login}
					size='large'
					onSwitchClick={() => {
						setLoginIsOn(!loginIsOn)
						state.saveButtonsStatus('Login', loginIsOn)
					}}
					isOn={
						state.settings.buttons.includes(ButtonsEnum.Login) ? true : false
					}
				/>
			</View>
		</Layout>
	)
}
const styles = StyleSheet.create({
	switchContainer: {
		marginTop: wp(10),
		borderTopColor: CColor.purpule,
		borderTopWidth: 2,
		paddingTop: wp(5)
	},
	switchContainerTitle: {
		fontSize: wp(6),
		fontWeight: 'bold',
		marginBottom: wp(2),
		color: CColor.blue
	},
	langButtons: {
		flexDirection: 'row'
	},
	langButtonsWrap: {
		flex: 1
	}
})
