import type { Meta, StoryObj } from '@storybook/react'
import { Text, Tooltip, TooltipProps } from '@tucupi-ui/react'

export default {
  title: 'OVERLAY/Tooltip',
  component: Tooltip,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quod aspernatur fugit laudantium cupiditate sed quia culpa deleniti aliquid. Animi laborum eligendi cupiditate sit excepturi, natus est nihil commodi unde',
    trigger: <Text>21</Text>,
    isControlOpen: false,
  },
  argTypes: {
    trigger: {
      control: {
        type: null,
      },
      isControlOpen: {
        control: {
          type: 'boolean',
        },
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
