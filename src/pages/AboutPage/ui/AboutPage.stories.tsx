import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import AboutPage from './AboutPage'

const meta = {
	title: 'pages/AboutPage',
	component: AboutPage,
} satisfies Meta<typeof AboutPage>

export default meta

type Story = StoryObj<typeof meta>

export const AboutPageLight: Story = {
	args: {},
}
export const AboutPageDark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}
