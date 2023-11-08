import type { StoryObj, Meta } from '@storybook/react'

import { Box, BoxProps, Text } from '@tucupi-ui/react'

export default {
  title: 'SURFACE/Box',
  component: Box,

  args: {
    children: <Text>Box testing</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
