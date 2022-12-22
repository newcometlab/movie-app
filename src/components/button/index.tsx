import { ReactNode } from 'react'

import { twMerge } from 'tailwind-merge'

type Props = {
  children?: ReactNode
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  type?: 'primary' | 'secondary' | 'default'
  font?: 'normal' | 'medium' | 'bold'
  disabled?: boolean
  onClick?: (info: {
    ev: React.MouseEvent<HTMLButtonElement, MouseEvent>
  }) => void
}

export default function Button(props: Props) {
  return (
    <button
      type="button"
      onClick={(ev) => {
        props.onClick?.({ ev })
      }}
      disabled={props.disabled}
      className={twMerge(
        'text-center focus:ring-2 focus:outline-none border-style-color-blue border',
        props.size === 'xs'
          ? 'py-1.5 px-2 text-xs rounded-md'
          : props.size === 'sm'
          ? 'py-2 px-3 text-sm rounded-md'
          : props.size === 'lg'
          ? 'py-3 px-5 text-base rounded-lg'
          : props.size === 'xl'
          ? 'py-3.5 px-6 text-base rounded-lg'
          : 'py-2.5 px-4 text-base rounded-lg',
        props.type === 'primary'
          ? 'text-primary bg-style-color-rose hover:bg-style-color-rose-800 focus:ring-style-color-rose-800'
          : props.type === 'secondary'
          ? 'text-primary bg-style-color-gray hover:bg-style-color-gray-800 focus:ring-style-color-gray-800'
          : 'text-secondary bg-white hover:bg-gray-400 focus:ring-gray-400',
        props.font === 'medium'
          ? 'font-medium'
          : props.font === 'bold'
          ? 'font-bold'
          : 'font-normal'
      )}
    >
      {props.children}
    </button>
  )
}
