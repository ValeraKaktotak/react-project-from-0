import type { Meta, StoryObj } from '@storybook/react'
import { Button, ThemeButton } from './Button'

const meta = {
	title: 'shared/Button',
	component: Button,
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Outline: Story = {
	args: {
		children: 'Text',
		theme: ThemeButton.OUTLINE,
	},
}

export const Clear: Story = {
	args: {
		children: 'Text',
		theme: ThemeButton.CLEAR,
	},
}

export const Error: Story = {
	args: {
		children: 'Text',
		theme: ThemeButton.ERROR,
	},
}
