import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <header className="bg-slate-900 border-b border-slate-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          KAYZEN
        </Link>
        <div className="hidden md:flex gap-6">
          <Link to="/" className="text-gray-300 hover:text-white">{t('nav.home')}</Link>
          <Link to="/pricing" className="text-gray-300 hover:text-white">{t('nav.pricing')}</Link>
          <Link to="/login" className="text-gray-300 hover:text-white">{t('nav.login')}</Link>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </header>
  )
}
