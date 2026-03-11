import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-20 px-4 max-w-7xl mx-auto"
    >
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          {t('hero.title')}
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
          {t('hero.subtitle')}
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 mx-auto transition">
          {t('hero.cta')} <ArrowRight size={20} />
        </button>
      </div>
    </motion.section>
  )
}
