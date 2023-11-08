import type { StoryObj, Meta } from '@storybook/react'

import { Text, TextProps } from '@tucupi-ui/react'

export default {
  title: 'TYPOGRAPHY/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatibus maxime sint debitis rerum voluptate architecto magni quas, placeat obcaecati! Ut soluta ducimus molestiae vitae odit! Ducimus rem sit ad.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
