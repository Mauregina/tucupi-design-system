import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@tucupi-ui/react'

export default {
  title: 'DATA DISPLAY/Avatar',
  component: Avatar,
  args: {
    src: 'https://avatars.githubusercontent.com/u/8762879?v=4',
    alt: 'Maura Costa',
    imageSize: 'sm',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
    imageSize: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
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
