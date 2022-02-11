import React, { useState, createContext } from 'react'
import { LanguageEnum } from '../Utils/Types'
interface LanguageContextType {
	language: string
	setLanguage: (v: LanguageEnum) => void
}
export const LanguageContext = createContext({} as LanguageContextType)

interface LanguageContextProviderType {
	children: React.ReactNode
}

export const LanguageContextProvider = (props: LanguageContextProviderType) => {
	const { children } = props
	const [language, setLanguage] = useState<LanguageEnum>(LanguageEnum.fa)
	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			{children}
		</LanguageContext.Provider>
	)
}
