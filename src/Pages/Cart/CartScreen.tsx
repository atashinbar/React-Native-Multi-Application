import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import CartList from '../../Components/List/CartList'
import Layout from '../../Global/Layout'
import { CColor, wp } from '../../Global/Style'
import { rootReducerType } from '../../Redux/Reducers'

export default function CartScreen() {
	const products = useSelector((state: rootReducerType) => state.cart.products)
	const mainCount = useSelector((state: rootReducerType) => state.cart.count)
	return (
		<Layout>
			{mainCount === 0 ? (
				<Text style={styles.text}>Your cart is Empty!</Text>
			) : (
				<FlatList
					data={products}
					showsHorizontalScrollIndicator={false}
					keyExtractor={(item) => item.name.toString()}
					renderItem={({ item }) => {
						return <CartList title={item.name} count={item.count} />
					}}
				/>
			)}
		</Layout>
	)
}

const styles = StyleSheet.create({
	text: {
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: wp(4),
		color: CColor.black
	}
})
