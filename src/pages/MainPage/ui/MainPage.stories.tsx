import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import MainPage from './MainPage'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
	title: 'pages/MainPage',
	component: MainPage
} satisfies Meta<typeof MainPage>

export default meta

type Story = StoryObj<typeof meta>

export const MainPageLight: Story = {
	args: {},
	decorators: [StoreDecorator({})]
}
export const MainPageDark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]
}
