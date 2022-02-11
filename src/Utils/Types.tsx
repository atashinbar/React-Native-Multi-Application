export enum buttonBackgroundEnum {
	danger = 'danger',
	success = 'success',
	primary = 'primary',
	navigationButton = 'navigationButton'
}

export enum textInputKeyboardTypeString {
	numberPad = 'number-pad',
	emailAddress = 'email-address'
}

export interface MovieItemType {
	adult: boolean
	backdrop_path: string
	genre_ids: number[]
	id: number
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string
	release_date: string
	title: string
	video: boolean
	vote_average: number
	vote_count: number
}

export interface MovieDataType {
	overview: string
	poster_path: string
	release_date: string
	title: string
}

export interface LanguageType {
	fa: string
	en: string
}

export enum LanguageEnum {
	fa = 'fa',
	en = 'en'
}

export enum ButtonsEnum {
	Login = 'Login',
	Movies = 'Movies',
	Text = 'Text',
	Color = 'ColorGenerator',
	List = 'List',
	Counter = 'Counter'
}

export interface ButtonsType {
	Login: string
	Movies: string
	Text: string
	ColorGenerator: string
	List: string
	Counter: string
}

export enum CartActionsEnum {
	Add = 'ADD_PRODUCT',
	Remove = 'REMOVE_PRODUCT'
}
