import React from 'react'

interface Props {
  children: React.ReactNode
  className?: string
}

export default function Card({ children, className = '' }: Props) {
  return (
    <div className={\g-slate-800 rounded-lg p-6 border border-slate-700 \\}>
      {children}
    </div>
  )
}
