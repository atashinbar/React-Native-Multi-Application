import { CartActionsEnum } from '../../Utils/Types'
import { Action } from '../Actions/CartActions'

const initialState: CartStatePropsType = {
	products: [],
	count: 0
}

export type productDetailsType = {
	name: string
	count: number
}

export interface CartStatePropsType {
	products: productDetailsType[]
	count: number
}

export const CartReducer = (state: CartStatePropsType = initialState, action: Action) => {
	switch (action.type) {
		case CartActionsEnum.Add:
			var sum = 1
			for (var i = 0; i < state.products.length; i++) {
				sum += state.products[i].count
			}
			if (state.products.some((product) => product.name === action.payload.name)) {
				const newObject = state.products.map((product) => {
					return product.name === action.payload.name
						? { ...product, count: product.count + 1 }
						: product
				})

				return {
					...state,
					products: newObject,
					count: sum
				}
			} else {
				return {
					...state,
					products: [...state.products, action.payload],
					count: sum
				}
			}

		case CartActionsEnum.Remove:
			console.log(state.products)
			if (state.products.some((product) => product.name === action.payload.name)) {
				let newObject = state.products.map((product) => {
					return product.name === action.payload.name
						? {
								...product,
								count: product.count >= 1 ? product.count - 1 : 0
						  }
						: product
				})
				const filteredItems = newObject.filter((item) => item.count !== 0)
				var sum = -1
				for (var i = 0; i < newObject.length; i++) {
					sum += state.products[i].count
				}
				return {
					...state,
					products: filteredItems,
					count: sum >= 0 ? sum : 0
				}
			} else {
				console.warn("You don't have this product in your cart")
				return state
			}
		default:
			return state
	}
}
