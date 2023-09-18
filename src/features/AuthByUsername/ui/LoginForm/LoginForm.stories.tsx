import type { Meta, StoryObj } from '@storybook/react'
import { LoginForm } from './LoginForm'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
	title: 'features/LoginForm',
	component: LoginForm
} satisfies Meta<typeof LoginForm>

export default meta

type Story = StoryObj<typeof meta>

export const Login: Story = {
	args: {},
	decorators: [
		StoreDecorator({
			login: {
				username: 'Victor',
				password: 'asd'
			}
		})
	]
}
export const ErrorLogin: Story = {
	args: {},
	decorators: [
		StoreDecorator({
			login: {
				username: 'Victor',
				password: 'asd',
				error: 'SOME ERROR'
			}
		})
	]
}
export const LoadingLogin: Story = {
	args: {},
	decorators: [
		StoreDecorator({
			login: {
				username: 'Victor',
				password: 'asd',
				isLoading: true
			}
		})
	]
}
