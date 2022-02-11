import React from 'react'
import { LanguageContextProvider } from '../../Context/LanguageContext'
import Home from './Home'

interface HomeContainerType {
	navigation?: any
}

export default function HomeContainer(props: HomeContainerType) {
	const { navigation } = props
	return (
		<LanguageContextProvider>
			<Home navigation={navigation} />
		</LanguageContextProvider>
	)
}
