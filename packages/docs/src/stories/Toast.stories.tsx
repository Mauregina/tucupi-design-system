import { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps, Button } from '@tucupi-ui/react'
import { useState } from 'react'

const DemoToast = (props: ToastProps) => {
  const [open, setOpen] = useState(false)

  function handleOpenToast() {
    setOpen(true)
  }

  return (
    <div>
      <Button onClick={handleOpenToast}>Show Toast</Button>
      <Toast open={open} onOpenChange={setOpen} {...props} />
    </div>
  )
}

export default {
  title: 'OVERLAY/Toast',
  component: DemoToast,
  args: {
    title: 'Title',
    description: 'Friday, October 1st, 16h',
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
