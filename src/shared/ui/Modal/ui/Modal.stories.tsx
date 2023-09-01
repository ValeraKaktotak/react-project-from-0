import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'

const meta = {
	title: 'shared/Modal',
	component: Modal,
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

export const ModalWindow: Story = {
	args: {
		children:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo libero hic eum modi quas deleniti accusantium? Ab quaerat numquam iste!',
		isOpen: true,
	},
}
