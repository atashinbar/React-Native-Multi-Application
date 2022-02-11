import axios from 'axios'
import config from './config.json'

export default axios.create({
	baseURL:
		'https://api.themoviedb.org/3/search/movie?api_key=8d3bc41aed6d593973a9378d9a4faacf&language=en-US&page=1&include_adult=false'
	// timeout: 1000,
	// headers: { 'X-Custom-Header': 'foobar' }
})
