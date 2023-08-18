import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { AppLink, AppThemeClass } from './AppLink'

const meta = {
	title: 'shared/AppLink',
	component: AppLink,
	args: {
		to: '/',
	},
} satisfies Meta<typeof AppLink>

export default meta

type Story = StoryObj<typeof meta>

export const AppLinkPrimaryLight: Story = {
	args: {
		children: 'Text',
		theme: AppThemeClass.PRIMARY,
	},
}
export const AppLinkSecondaryLight: Story = {
	args: {
		children: 'Text',
		theme: AppThemeClass.SECONDARY,
	},
}
export const AppLinkPrimaryDark: Story = {
	args: {
		children: 'Text',
		theme: AppThemeClass.PRIMARY,
	},
	decorators: [ThemeDecorator(Theme.DARK)],
}
export const AppLinkSecondaryDark: Story = {
	args: {
		children: 'Text',
		theme: AppThemeClass.SECONDARY,
	},
	decorators: [ThemeDecorator(Theme.DARK)],
}
