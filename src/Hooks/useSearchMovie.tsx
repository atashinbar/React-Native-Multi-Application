import React, { useEffect, useState, useRef } from 'react'
import movieSearcher from '../Services/MovieServices'
import { MovieItemType } from '../Utils/Types'
interface useSearchMovieType {
	searchText: string
	pageId: number
	newSearch: boolean
}
export default () => {
	const [results, setResults] = useState<MovieItemType[]>([])
	const [errText, setErrText] = useState<string>('')
	const [loading, setLoading] = useState<boolean>(false)
	const searchTheResults = async ({
		searchText,
		pageId,
		newSearch
	}: useSearchMovieType) => {
		// var requestOptions = {
		//   method: 'GET',
		//   redirect: 'follow',
		// };
		// fetch(
		//   'https://api.themoviedb.org/3/search/movie?api_key=691aaabafdf460ba5889ea1aaf5f4f94&language=en-US&page=1&include_adult=false&query=spiderman',
		//   requestOptions,
		// )
		//   .then(response => response.json())
		//   .then(result => setResults(result.results))
		//   .catch(error => console.log('error', error));
		if (newSearch) setResults([])
		setLoading(true)

		try {
			const response = await movieSearcher.get('/', {
				params: {
					page: pageId.toString(),
					query: searchText
				}
			})
			newSearch
				? setResults(response.data.results)
				: setResults([...results, ...response.data.results])

			setErrText('')
			setLoading(false)
		} catch (err) {
			setErrText('Somthing Went Wrong ...')
			setLoading(false)
		}
	}

	useEffect(() => {
		// searchTheResults({ searchText: 'spiderman', pageId: '1', newSearch: true })
	}, [])
	return { results, errText, searchTheResults, loading }
}
