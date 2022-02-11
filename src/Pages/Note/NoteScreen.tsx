import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { SearchBar } from '../../Components'
import Layout from '../../Global/Layout'
import { wp } from '../../Global/Style'
import { addNote, deleteNote, saveNote } from '../../Redux/Actions/NoteActions'
import { rootReducerType } from '../../Redux/Reducers'

export default function NoteScreen() {
	const noteData = useSelector((state: rootReducerType) => state.note.noteArray)
	const note = useSelector((state: rootReducerType) => state.note.note)
	const dispatch = useDispatch()
	const onSubmitNoteClick = () => {
		dispatch(saveNote(''))
		dispatch(addNote(note))
	}
	const onNoteClickHandler = (note: string) => {
		dispatch(deleteNote(note))
	}
	const onChangeInput = (text: string) => {
		dispatch(saveNote(text))
	}
	return (
		<Layout>
			<SearchBar
				placeholder='Write your note...'
				onSearchButtonClick={onSubmitNoteClick}
				value={note}
				onChangeText={onChangeInput}
			/>
			{noteData.map((item) => {
				return (
					<TouchableOpacity key={item} onPress={() => onNoteClickHandler(item)}>
						<Text style={styles.text}>{item}</Text>
					</TouchableOpacity>
				)
			})}
		</Layout>
	)
}

const styles = StyleSheet.create({
	text: {
		fontSize: wp(4),
		marginBottom: wp(3)
	}
})
