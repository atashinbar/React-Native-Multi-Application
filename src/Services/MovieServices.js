import axios from 'axios'
import config from './config.json'

export default axios.create({
	baseURL:
		config.movieServer +
		'?api_key=' +
		config.movieAPI +
		'&language=en-US&include_adult=false'
	// timeout: 1000,
	// headers: { 'X-Custom-Header': 'foobar' }
})
