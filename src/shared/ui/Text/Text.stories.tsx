import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Text, TextTheme } from './Text'

const meta = {
	title: 'shared/Text',
	component: Text
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<typeof meta>

export const TextLightTheme: Story = {
	args: {
		title: 'some title',
		text: 'some text'
	}
}
export const TextDarkTheme: Story = {
	args: {
		title: 'some title',
		text: 'some text'
	},
	decorators: [ThemeDecorator(Theme.DARK)]
}
export const TextErrorLightTheme: Story = {
	args: {
		title: 'some title',
		text: 'some text',
		theme: TextTheme.ERROR
	}
}
export const TextErrorDarkTheme: Story = {
	args: {
		title: 'some title',
		text: 'some text',
		theme: TextTheme.ERROR
	},
	decorators: [ThemeDecorator(Theme.DARK)]
}
