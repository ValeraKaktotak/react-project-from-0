import { configureStore } from '@reduxjs/toolkit'
import { StateSchema } from './State.Schema'

export function createReduxStore(initialState?: StateSchema) {
	return configureStore<StateSchema>({
		reducer: {},
		devTools: __IS_DEV__,
		preloadedState: initialState,
	})
}
const store = createReduxStore()

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
