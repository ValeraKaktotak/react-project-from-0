import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser, IUserSchema } from '../types/user'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

const initialState: IUserSchema = {}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAuthData: (state, action: PayloadAction<IUser>) => {
			state.authData = action.payload
		},
		initAuthData: (state) => {
			const userData = localStorage.getItem(USER_LOCALSTORAGE_KEY)
			if (userData) {
				state.authData = JSON.parse(userData)
			}
		},
		userLogout: (state) => {
			state.authData = undefined
			localStorage.removeItem(USER_LOCALSTORAGE_KEY)
		}
	}
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
