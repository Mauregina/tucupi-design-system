import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import { AvatarContainer, AvatarImage, AvatarFallback } from './styles'

export type AvatarProps = ComponentProps<typeof AvatarImage> & {
  imageSize: 'sm' | 'md' | 'lg'
}

export function Avatar({ imageSize = 'sm', ...props }: AvatarProps) {
  return (
    <AvatarContainer imageSize={imageSize}>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
