import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">KAYZEN</h3>
            <p className="text-gray-400">{t('footer.description')}</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.product')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">{t('footer.features')}</a></li>
              <li><a href="#" className="hover:text-white">{t('footer.pricing')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">{t('footer.about')}</a></li>
              <li><a href="#" className="hover:text-white">{t('footer.blog')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">{t('footer.privacy')}</a></li>
              <li><a href="#" className="hover:text-white">{t('footer.terms')}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8">
          <p className="text-center text-gray-400">&copy; {currentYear} KAYZEN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
