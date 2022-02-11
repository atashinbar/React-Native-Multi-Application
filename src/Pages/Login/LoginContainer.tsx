import React from 'react'
import { LanguageContextProvider } from '../../Context/LanguageContext'
import LoginScreen from './LoginScreen'

export default function LoginContainer() {
	return (
		<LanguageContextProvider>
			<LoginScreen />
		</LanguageContextProvider>
	)
}
