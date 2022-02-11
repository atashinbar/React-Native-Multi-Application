export type Action =
	| {
			type: 'ADD_NOTE'
			payload: string
	  }
	| {
			type: 'DELETE_NOTE'
			payload: string
	  }
	| {
			type: 'SAVE_NOTE'
			payload: string
	  }
export const addNote = (text: string): Action => ({ type: 'ADD_NOTE', payload: text })
export const deleteNote = (text: string): Action => ({
	type: 'DELETE_NOTE',
	payload: text
})
export const saveNote = (text: string): Action => ({ type: 'SAVE_NOTE', payload: text })
