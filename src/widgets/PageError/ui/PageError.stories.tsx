import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { PageError } from './PageError'

const meta = {
	title: 'widget/PageError',
	component: PageError,
} satisfies Meta<typeof PageError>

export default meta

type Story = StoryObj<typeof meta>

export const PageErrorLight: Story = {
	args: {},
}
export const PageErrorDark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}
