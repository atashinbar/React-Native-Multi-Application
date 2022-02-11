import React, { useState, useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { GeneralButton } from '../../Components'
import { GeneralInput } from '../../Components/Input/GeneralInput'
import { LanguageContext } from '../../Context/LanguageContext'
import Layout from '../../Global/Layout'
import { CColor, wp } from '../../Global/Style'
import { HGLang } from '../../Language'
import { buttonBackgroundEnum, LanguageEnum } from '../../Utils/Types'

export default function LoginScreen() {
	const [name, setName] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const lang = useContext(LanguageContext)
	return (
		<Layout>
			<View style={styles.langWrapper}>
				<Text>{HGLang(lang.language)?.selectYourLang}</Text>
				<View style={styles.buttonWrapper}>
					<View style={styles.button}>
						<GeneralButton
							type={
								lang.language === LanguageEnum.de
									? buttonBackgroundEnum.danger
									: undefined
							}
							title='Germany'
							onPress={() => lang.setLanguage(LanguageEnum.de)}
							style={{ margin: 0 }}
						/>
					</View>
					<View style={styles.button}>
						<GeneralButton
							type={
								lang.language === LanguageEnum.en
									? buttonBackgroundEnum.danger
									: undefined
							}
							title='English'
							onPress={() => lang.setLanguage(LanguageEnum.en)}
							style={{ margin: 0 }}
						/>
					</View>
				</View>
			</View>
			<GeneralInput
				value={name}
				onChangeText={(text) => setName(text)}
				placeholder={HGLang(lang.language)?.nameLastName}
			/>
			<GeneralInput
				value={email}
				onChangeText={(text) => setEmail(text)}
				placeholder={HGLang(lang.language)?.email}
			/>
			<GeneralButton
				type={buttonBackgroundEnum.success}
				title={HGLang(lang.language)?.submit}
				onPress={() => console.warn('Test')}
				style={{ margin: 0 }}
			/>
		</Layout>
	)
}

const styles = StyleSheet.create({
	langWrapper: {
		height: wp(30),
		borderBottomWidth: 1,
		borderBottomColor: CColor.black,
		marginBottom: wp(5)
	},
	buttonWrapper: {
		flexDirection: 'row'
	},
	button: {
		flex: 1,
		alignSelf: 'stretch',
		marginTop: wp(4)
	}
})
