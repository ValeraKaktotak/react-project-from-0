import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IUser, userActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

interface ILoginByUsernameProps {
	username: string
	password: string
}

export const loginByUsername = createAsyncThunk<
	IUser,
	ILoginByUsernameProps,
	{ rejectValue: string }
>('login/loginByUsername', async (authData, thunkAPI) => {
	try {
		const response = await axios.post<IUser>(
			'http://localhost:8000/login',
			authData
		)
		localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
		thunkAPI.dispatch(userActions.setAuthData(response.data))

		if (!response.data) {
			throw new Error()
		}

		return response.data
	} catch (e) {
		return thunkAPI.rejectWithValue(e.code)
	}
})
