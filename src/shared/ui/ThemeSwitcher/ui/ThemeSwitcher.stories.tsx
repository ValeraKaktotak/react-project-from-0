import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ThemeSwitcherDecorator } from 'shared/config/storybook/ThemeSwitcherDecorator/ThemeSwitcherDecorator'
import { ThemeSwitcher } from './ThemeSwitcher'

const meta = {
	title: 'shared/ThemeSwitcher',
	component: ThemeSwitcher,
} satisfies Meta<typeof ThemeSwitcher>

export default meta

type Story = StoryObj<typeof meta>

export const LoaderLight: Story = {
	args: {},
	decorators: [ThemeSwitcherDecorator(Theme.DARK)],
}
export const LoaderDark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}
