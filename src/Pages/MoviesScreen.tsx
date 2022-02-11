import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native'
import { MovieList, SearchBar } from '../Components'
import Layout from '../Global/Layout'
import { wp } from '../Global/Style'
import usePrevious from '../Hooks/usePrevious'
import useSearchMovie from '../Hooks/useSearchMovie'
interface MoviesScreenType {
	navigation: any
}
export default function MoviesScreen(props: MoviesScreenType) {
	const { navigation } = props
	const [searchText, setSearchText] = useState<string>('')
	const [pageId, setPageId] = useState(1)
	const [refresh, setRefresh] = useState(false)
	const { results, errText, searchTheResults, loading } = useSearchMovie()
	const previousSearchText = usePrevious(searchText)
	const loadMore = () => {
		setPageId(pageId + 1)
		searchTheResults({
			searchText: searchText,
			pageId: pageId + 1,
			newSearch: false
		})
	}
	const onRefresh = () => {
		setPageId(1)
		setRefresh(true)
	}

	useEffect(() => {
		searchTheResults({ searchText: 'spiderman', pageId: 1, newSearch: true })
	}, [])

	return (
		<Layout>
			<SearchBar
				onChangeText={(text) => setSearchText(text)}
				value={searchText}
				onSearchButtonClick={() => {
					if (previousSearchText !== searchText) setPageId(1)
					searchTheResults({
						searchText: searchText,
						pageId: previousSearchText !== searchText ? 1 : pageId,
						newSearch: previousSearchText !== searchText ? true : false
					})
				}}
			/>
			{errText !== '' && <Text>{errText}</Text>}
			{loading ? (
				<View style={styles.loadingWrap}>
					<ActivityIndicator size='large' />
				</View>
			) : (
				<FlatList
					onEndReached={loadMore}
					onEndReachedThreshold={0.01}
					showsVerticalScrollIndicator={false}
					numColumns={2}
					columnWrapperStyle={{ justifyContent: 'space-between' }}
					data={results}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => {
						return (
							<MovieList
								onPressMovie={() => {
									navigation.push('MovieDetail', {
										movieData: item
									})
								}}
								title={item.original_title}
								imageSrc={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
							/>
						)
					}}
					refreshing={refresh}
					onRefresh={() => onRefresh()}
				/>
			)}
		</Layout>
	)
}

const styles = StyleSheet.create({
	loadingWrap: {
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '80%'
	}
})
