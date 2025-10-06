'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'

export default function Skills() {
  const { isDarkMode } = useTheme()
  const skills = [
    'Python',
    'C++',
    'C',
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Express.js',
    'RESTful API',
    'x86 Assembly'
  ]

  return (
    <section id="skills" className={`py-20 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>Skills</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 max-w-7xl mx-auto"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.2, 
                delay: index * 0.05,
                type: "spring",
                stiffness: 200,
                damping: 20
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.2)",
                y: -4
              }}
              whileTap={{ 
                scale: 0.95
              }}
              transition={{
                hover: { duration: 0.1 },
                tap: { duration: 0.1 }
              }}
              className={`rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-all duration-100 border cursor-pointer min-h-[120px] flex flex-col justify-center ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 hover:shadow-gray-900/50' 
                  : 'bg-white border-gray-200 hover:shadow-lg'
              }`}
            >
              <h3 className={`font-bold text-lg md:text-xl lg:text-2xl transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>{skill}</h3>
              <p className={`text-base font-semibold mt-3 transition-colors duration-300 ${
                isDarkMode ? 'text-yellow-400' : 'text-primary-600'
              }`}>Experienced</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
