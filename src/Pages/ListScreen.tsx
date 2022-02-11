import React from 'react'
import { View, FlatList } from 'react-native'
import { UserList } from '../Components'
import { GeneralButton } from '../Components'
interface ListScreenType {
	listData: object
	navigation: any
}

const listData = [
	{
		id: '1',
		name: 'William',
		lName: 'Sanderson',
		pic: require('../../assets/img/b1.png')
	},
	{
		id: '2',
		name: 'Joseph',
		lName: 'Slater',
		pic: require('../../assets/img/b2.png')
	},
	{
		id: '3',
		name: 'Ava',
		lName: 'Hughes',
		pic: require('../../assets/img/g1.png')
	},
	{
		id: '4',
		name: 'Elizabeth',
		lName: 'Coleman',
		pic: require('../../assets/img/g2.png')
	},
	{
		id: '5',
		name: 'Stewart',
		lName: 'Peake',
		pic: require('../../assets/img/b3.png')
	},
	{
		id: '6',
		name: 'Jennifer',
		lName: 'Walsh',
		pic: require('../../assets/img/g3.png')
	},
	{
		id: '7',
		name: 'Lucas',
		lName: 'Chapman',
		pic: require('../../assets/img/b4.png')
	},
	{
		id: '8',
		name: 'Steven',
		lName: 'Quinn',
		pic: require('../../assets/img/b5.png')
	}
]
const ListScreen = (props: ListScreenType) => {
	const { navigation } = props
	return (
		<View>
			<View style={{ flexDirection: 'row' }}>
				<GeneralButton
					style={{ flex: 1 }}
					title='Go Back!'
					onPress={() => navigation.goBack()}
				/>
				<GeneralButton
					style={{ flex: 1 }}
					title='Go to Home!'
					onPress={() => navigation.push('Home')}
				/>
				<GeneralButton
					style={{ flex: 1 }}
					title='Go to Counter!'
					onPress={() => navigation.push('Counter')}
				/>
			</View>
			<FlatList
				data={listData}
				showsHorizontalScrollIndicator={false}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => {
					return (
						<UserList
							{...props}
							name={item.name}
							lName={item.lName}
							image={item.pic}
						/>
					)
				}}
			/>
		</View>
	)
}
export default ListScreen
