import { Decorator } from '@storybook/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { DeepPartial } from '@reduxjs/toolkit'

export const StoreDecorator = (state: DeepPartial<StateSchema>) => {
	const DecoratorFn: Decorator = (Story) => (
		<StoreProvider initialState={state}>
			<Story />
		</StoreProvider>
	)
	return DecoratorFn
}
