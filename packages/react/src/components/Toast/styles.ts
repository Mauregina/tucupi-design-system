import * as Toast from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { styled } from '../../styles'

export const ToastProvider = styled(Toast.Provider, {})

export const ToastRoot = styled(Toast.Root, {
  position: 'relative',
  background: '$purple900',
  borderRadius: '$sm',
  border: 'solid 1px $purple300',
  padding: '$3 $5',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
})

export const ToastTitle = styled(Toast.Title, {
  fontWeight: '$bold',
})

export const ToastDescription = styled(Toast.Description, {})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',
  position: 'absolute',
  cursor: 'pointer',
  top: '$4',
  right: '$4',
  color: '$gray200',
  backgroundColor: 'transparent',
  fontSize: 0,
})

export const Button = styled('button', {
  all: 'unset',
})

export const Icon = styled(X, {
  color: '$gray200',
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  margin: 0,
  width: '$80',
  maxWidth: '100vw',
  listStyle: 'none',
  outline: 'none',
})
