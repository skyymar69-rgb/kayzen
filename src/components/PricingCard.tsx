import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

interface Props {
  name: string
  price: number
  features: string[]
  highlighted?: boolean
}

export default function PricingCard({ name, price, features, highlighted }: Props) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={\ounded-lg p-8 \\}
    >
      <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
      <p className="text-4xl font-bold text-white mb-6">€{price}<span className="text-lg">/mo</span></p>
      <button className={\w-full py-2 rounded-lg font-semibold mb-8 transition \\}>
        Get Started
      </button>
      <ul className="space-y-4">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-gray-300">
            <Check size={20} className="text-green-400" />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
