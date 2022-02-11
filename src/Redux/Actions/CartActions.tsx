import { CartActionsEnum } from '../../Utils/Types'
import { productDetailsType } from '../Reducers/CartReducer'

export type Action =
	| {
			type: CartActionsEnum.Add
			payload: productDetailsType
	  }
	| {
			type: CartActionsEnum.Remove
			payload: productDetailsType
	  }

export const addProduct = (product: productDetailsType): Action => ({
	type: CartActionsEnum.Add,
	payload: product
})
export const removeProduct = (product: productDetailsType): Action => ({
	type: CartActionsEnum.Remove,
	payload: product
})
