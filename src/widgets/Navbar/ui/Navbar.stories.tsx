import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Navbar } from './Navbar'

const meta = {
	title: 'widget/Navbar',
	component: Navbar,
} satisfies Meta<typeof Navbar>

export default meta

type Story = StoryObj<typeof meta>

export const NavbarLight: Story = {
	args: {},
}
export const NavbarDark: Story = {
	args: {},
	decorators: [ThemeDecorator(Theme.DARK)],
}
