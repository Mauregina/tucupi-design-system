import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipProvider = styled(Tooltip.Provider, {})

export const TooltipContainer = styled(Tooltip.Root, {})

export const TooltipTrigger = styled(Tooltip.Trigger, {
  all: 'unset',
})

export const TooltipPortal = styled(Tooltip.Portal, {})

export const TooltipContent = styled(Tooltip.Content, {
  borderRadius: '$sm',
  padding: '$3 $4',
  color: '$gray100',
  border: 'solid 1px $purple300',
  backgroundColor: '$purple900',
  maxWidth: '$64',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$purple900',
  height: '$2',
  width: '$5',
})
