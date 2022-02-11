import React, { useState, createContext } from 'react'
import { ButtonsType, LanguageEnum, LanguageType } from '../Utils/Types'

interface SettingsContextType {
	settings: SettingsInitialStateType
	setSettings?: (v: SettingsInitialStateType) => void
	saveButtonsStatus: (button: keyof ButtonsType, status: boolean) => void
	saveLanguage: (language: keyof LanguageType) => void
}

export const SettingsContext = createContext({} as SettingsContextType)

interface SettingsInitialStateType {
	language: keyof LanguageType
	buttons: (keyof ButtonsType)[]
}

interface SettingsContextProviderType {
	children: React.ReactNode
}

export const SettingsContextProvider = (props: SettingsContextProviderType) => {
	const { children } = props

	const onlyUnique = (value: any, index: any, self: string | any[]) => {
		return self.indexOf(value) === index
	}
	const [settings, setSettings] = useState<SettingsInitialStateType>({
		language: LanguageEnum.en,
		buttons: []
	})

	const saveLanguage = (language: keyof LanguageType) => {
		setSettings({
			...settings,
			language: language
		})
	}
	const saveButtonsStatus = (button: keyof ButtonsType, status: boolean) => {
		if (!status) {
			setSettings({
				...settings,
				buttons: [...settings.buttons, button].filter(onlyUnique)
			})
		} else {
			var array = [...settings.buttons]
			var index = array.indexOf(button)
			if (index !== -1) {
				array.splice(index, 1)
				setSettings({
					...settings,
					buttons: array
				})
			}
		}
	}
	console.log(settings)
	return (
		<SettingsContext.Provider value={{ settings, saveButtonsStatus, saveLanguage }}>
			{children}
		</SettingsContext.Provider>
	)
}
