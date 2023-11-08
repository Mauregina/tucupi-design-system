import { ComponentProps } from '@stitches/react'
import { Text } from '../Text'

import {
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastViewport,
  Icon,
} from './styles'

export type ToastProps = ComponentProps<typeof ToastRoot> & {
  title: string
  description: string
}

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastProvider swipeDirection="right">
      <ToastRoot {...props}>
        <ToastTitle asChild>
          <Text size={'xl'}>{title}</Text>
        </ToastTitle>
        <ToastDescription asChild>
          <Text size={'sm'}>{description}</Text>
        </ToastDescription>
        <ToastClose asChild>
          <Icon size={20} />
        </ToastClose>
      </ToastRoot>

      <ToastViewport />
    </ToastProvider>
  )
}

Toast.displayName = 'Toast'
