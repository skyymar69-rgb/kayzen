import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}

export default function Button({ variant = 'primary', children, ...props }: Props) {
  const baseStyles = 'px-4 py-2 rounded font-semibold transition'
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    secondary: 'bg-slate-700 hover:bg-slate-600 text-white',
  }

  return (
    <button className={\\ \\} {...props}>
      {children}
    </button>
  )
}
