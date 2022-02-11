import { en } from './En'
import { fa } from './Fa'
import { es } from './Es'
import { de } from './De'
export const HGLang = (l) => {
	switch (l) {
		case 'en':
			return en
		case 'fa':
			return fa
	}
}
