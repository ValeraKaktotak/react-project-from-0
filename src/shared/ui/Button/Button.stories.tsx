import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Button, ThemeButton } from './Button'

const meta = {
	title: 'shared/Button',
	component: Button
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const OutlineLight: Story = {
	args: {
		children: 'Text',
		theme: ThemeButton.OUTLINE
	}
}
export const OutlineDark: Story = {
	args: {
		children: 'Text',
		theme: ThemeButton.OUTLINE
	},
	decorators: [ThemeDecorator(Theme.DARK)]
}

export const ClearLight: Story = {
	args: {
		children: 'Text',
		theme: ThemeButton.CLEAR
	}
}
export const ClearDark: Story = {
	args: {
		children: 'Text',
		theme: ThemeButton.CLEAR
	},
	decorators: [ThemeDecorator(Theme.DARK)]
}
export const ErrorLight: Story = {
	args: {
		children: 'Text',
		theme: ThemeButton.ERROR
	}
}
export const ErrorDark: Story = {
	args: {
		children: 'Text',
		theme: ThemeButton.ERROR
	},
	decorators: [ThemeDecorator(Theme.DARK)]
}
export const Background: Story = {
	args: {
		children: 'Text',
		background: ThemeButton.BACKGROUND
	}
}
export const BackgroundInverted: Story = {
	args: {
		children: 'Text',
		background: ThemeButton.BACKGROUND_INVERTED
	}
}
export const RoundBorder: Story = {
	args: {
		children: '>',
		round: true
	}
}
export const DisabledButton: Story = {
	args: {
		children: 'test',
		theme: ThemeButton.OUTLINE,
		disabled: true
	}
}
