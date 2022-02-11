import React, { useContext } from 'react'
import { View, FlatList } from 'react-native'
import { GeneralButton } from '../../Components'
import { SettingsContext } from '../../Context/SettingsContext'

import { HGLang } from '../../Language'

interface HomeType {
	navigation: any
}
const Home = (props: HomeType) => {
	const state = useContext(SettingsContext)

	const { navigation } = props
	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
				width: '100%'
			}}>
			{/* <Text>{lang?.language}</Text> */}
			{/* <Button title="List Screen" onPress={() => navigation.navigate('List')} /> */}
			<GeneralButton
				title='Counter'
				onPress={() => navigation.navigate('Counter')}
			/>
			<GeneralButton
				title='User List'
				onPress={() => navigation.navigate('List')}
			/>
			<GeneralButton
				title='Color Generator'
				onPress={() => navigation.navigate('ColorGenerator')}
			/>
			<GeneralButton
				title='Text Input'
				onPress={() => navigation.navigate('Text')}
			/>
			<GeneralButton title='Movies' onPress={() => navigation.navigate('Movies')} />
			<GeneralButton title='Login' onPress={() => navigation.navigate('Login')} />
			{/* <GeneralButton
				title='Settings'
				onPress={() => navigation.navigate('Settings')}
			/> */}
			<GeneralButton title='Note' onPress={() => navigation.navigate('Note')} />
			<GeneralButton title='Shop' onPress={() => navigation.navigate('Shop')} />
			{/* <FlatList
				data={state.settings.buttons}
				showsHorizontalScrollIndicator={false}
				style={{ width: '100%' }}
				keyExtractor={(item) => item}
				renderItem={({ item }) => {
					console.log(item)
					return (
						<GeneralButton
							title={HGLang(state.settings.language)?.[`${item}`]}
							onPress={() => navigation.navigate(item)}
						/>
					)
				}}
			/> */}
		</View>
	)
}
export default Home
