import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import ProductList from '../../Components/List/ProductList'
import Layout from '../../Global/Layout'
import { addProduct, removeProduct } from '../../Redux/Actions/CartActions'
import { rootReducerType } from '../../Redux/Reducers'
import { productDetailsType } from '../../Redux/Reducers/CartReducer'

interface ShopScreenType {
	products: object[]
}
const products = [
	{
		id: '1',
		name: 'Bag',
		pic: require('../../../assets/img/bag.jpg')
	},
	{
		id: '2',
		name: 'Cream',
		pic: require('../../../assets/img/cream.jpg')
	},
	{
		id: '3',
		name: 'Headphone',
		pic: require('../../../assets/img/headphone.jpg')
	},
	{
		id: '4',
		name: 'Hoodi',
		pic: require('../../../assets/img/hoodi.jpg')
	}
]

export default function ShopScreen(props: ShopScreenType) {
	const dispatch = useDispatch()

	const increaseHandler = (product: productDetailsType) => {
		dispatch(addProduct(product))
	}
	const decreaseHandler = (product: productDetailsType) => {
		dispatch(removeProduct(product))
	}
	return (
		<Layout>
			<FlatList
				data={products}
				showsHorizontalScrollIndicator={false}
				numColumns={2}
				columnWrapperStyle={{ justifyContent: 'space-between' }}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => {
					return (
						<ProductList
							increaseButton={() =>
								increaseHandler({ name: item.name, count: 1 })
							}
							decreaseButton={() =>
								decreaseHandler({ name: item.name, count: 1 })
							}
							{...props}
							title={item.name}
							imageSrc={item.pic}
						/>
					)
				}}
			/>
		</Layout>
	)
}
