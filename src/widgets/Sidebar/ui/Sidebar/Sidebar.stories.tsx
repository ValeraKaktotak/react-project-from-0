import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ThemeSwitcherDecorator } from 'shared/config/storybook/ThemeSwitcherDecorator/ThemeSwitcherDecorator'
import { Sidebar } from './Sidebar'

const meta = {
	title: 'widget/Sidebar',
	component: Sidebar,
} satisfies Meta<typeof Sidebar>

export default meta

type Story = StoryObj<typeof meta>

export const SidebarLight: Story = {
	args: {},
}
export const SidebarDark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK), ThemeSwitcherDecorator(Theme.DARK)],
}
