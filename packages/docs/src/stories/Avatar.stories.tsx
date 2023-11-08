import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@tucupi-ui/react'

export default {
  title: 'DATA DISPLAY/Avatar',
  component: Avatar,
  args: {
    src: 'https://avatars.githubusercontent.com/u/8762879?v=4',
    alt: 'Maura Costa',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
