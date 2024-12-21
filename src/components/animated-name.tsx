'use client'

import { motion } from 'framer-motion'

export function AnimatedName() {
  return (
    <div className="relative inline-block">
      <h2 className="text-5xl font-bold mb-4">Ryan</h2>
      <motion.div
        className="absolute -bottom-1 left-0 right-0 h-3 bg-yellow-300 rounded-sm"
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      />
    </div>
  )
}

