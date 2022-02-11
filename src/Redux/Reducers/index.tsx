import { combineReducers } from 'redux'
import { CartReducer } from './CartReducer'
import { NoteReducer } from './NoteReducer'

export const rootReducer = combineReducers({
	note: NoteReducer,
	cart: CartReducer
})

export type rootReducerType = ReturnType<typeof rootReducer>
