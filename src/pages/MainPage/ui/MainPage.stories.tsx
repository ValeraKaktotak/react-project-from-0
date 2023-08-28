import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import MainPage from './MainPage'

const meta = {
	title: 'pages/MainPage',
	component: MainPage,
} satisfies Meta<typeof MainPage>

export default meta

type Story = StoryObj<typeof meta>

export const MainPageLight: Story = {
	args: {},
}
export const MainPageDark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}
