import { ComponentProps, ReactNode, useState, useEffect } from 'react'
import { Text } from '../Text'
import {
  TooltipProvider,
  TooltipContainer,
  TooltipTrigger,
  TooltipPortal,
  TooltipContent,
  TooltipArrow,
} from './styles'

export type TooltipProps = {
  trigger: ReactNode
  isControlOpen: boolean
} & ComponentProps<typeof TooltipContent>

export function Tooltip({ trigger, isControlOpen, ...props }: TooltipProps) {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false)

  const handleOpenChange = (open: boolean) => {
    setIsTooltipOpen(open)
  }

  useEffect(() => {
    setIsTooltipOpen(isControlOpen)
  }, [isControlOpen])

  return (
    <TooltipProvider>
      <TooltipContainer onOpenChange={handleOpenChange} open={isTooltipOpen}>
        <TooltipTrigger>{trigger}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent {...props}>
            <Text>{props.children}</Text>
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipContainer>
    </TooltipProvider>
  )
}

Tooltip.displayName = 'Tooltip'
