import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Pages/Home/Home'
import ListScreen from './Pages/ListScreen'
import CounterScreen from './Pages/CounterScreen'
import ProfileScreen from './Pages/ProfileScreen'
import ColorGeneratorScreen from './Pages/ColorGeneratorScreen'
import TextScreen from './Pages/TextScreen'
import MoviesScreen from './Pages/MoviesScreen'
import MovieDetailScreen from './Pages/MovieDetailScreen'
import HomeContainer from './Pages/Home/HomeContainer'
import LoginScreen from './Pages/Login/LoginScreen'
import { Button, View } from 'react-native'
import Layout from './Global/Layout'
import LoginContainer from './Pages/Login/LoginContainer'
import SettingsScreen from './Pages/Settings/SettingsScreen'
import { SettingsContextProvider } from './Context/SettingsContext'
import { Provider } from 'react-redux'
import NoteScreen from './Pages/Note/NoteScreen'
import { store } from './Redux/store'
import Header from './Global/Header'
import CartScreen from './Pages/Cart/CartScreen'
import HeaderTitle from './Global/Header/HeaderTitle'
import HeaderRight from './Global/Header/HeaderRight'
import ShopScreen from './Pages/Shop/ShopScreen'
const Stack = createNativeStackNavigator()

function App() {
	return (
		<Provider store={store}>
			<SettingsContextProvider>
				<NavigationContainer>
					<Stack.Navigator
						initialRouteName='Home'
						screenOptions={({ route, navigation }) => ({
							headerTitle: (props) => (
								<HeaderTitle route={route} {...props} />
							),
							headerRight: (props) => (
								<HeaderRight navigation={navigation} {...props} />
							)
						})}>
						<Stack.Screen name='Home' component={HomeContainer} />
						<Stack.Screen name='List' component={ListScreen} />
						<Stack.Screen name='Counter' component={CounterScreen} />
						<Stack.Screen name='Profile' component={ProfileScreen} />
						<Stack.Screen
							name='ColorGenerator'
							component={ColorGeneratorScreen}
						/>
						<Stack.Screen name='Text' component={TextScreen} />
						<Stack.Screen name='Movies' component={MoviesScreen} />
						<Stack.Screen
							name='MovieDetail'
							component={MovieDetailScreen}
							options={({ route }) => ({ title: route.params.name })}
						/>
						<Stack.Screen name='Login' component={LoginContainer} />
						<Stack.Screen name='Settings' component={SettingsScreen} />
						<Stack.Screen name='Note' component={NoteScreen} />
						<Stack.Screen name='Cart' component={CartScreen} />
						<Stack.Screen name='Shop' component={ShopScreen} />
					</Stack.Navigator>
				</NavigationContainer>
			</SettingsContextProvider>
		</Provider>
	)
}

export default App
