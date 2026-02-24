'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'
import {
  SiPython,
  SiCplusplus,
  SiC,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiDotnet,
  SiNodedotjs,
  SiFlask,
  SiPostman,
} from 'react-icons/si'

export default function Skills() {
  const { isDarkMode } = useTheme()
  const skills = [
    { name: 'Python', Icon: SiPython },
    { name: 'C++', Icon: SiCplusplus },
    { name: 'C', Icon: SiC },
    { name: 'HTML', Icon: SiHtml5 },
    { name: 'CSS', Icon: SiCss3 },
    { name: 'JavaScript', Icon: SiJavascript },
    { name: 'TypeScript', Icon: SiTypescript },
    { name: 'React', Icon: SiReact },
    { name: 'Next.js', Icon: SiNextdotjs },
    { name: 'Express.js', Icon: SiExpress },
    { name: 'C#', Icon: SiDotnet },
    { name: 'Node.js', Icon: SiNodedotjs },
    { name: 'Flask', Icon: SiFlask },
    { name: 'RESTful APIs', Icon: SiPostman },
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
          {skills.map(({ name, Icon }, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.2, 
                delay: index * 0.05,
                type: "spring",
                stiffness: 200,
                damping: 20,
                hover: { duration: 0.1 },
                tap: { duration: 0.1 }
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
              className={`rounded-lg p-8 text-center shadow-md hover:shadow-lg transition-all duration-100 border cursor-pointer min-h-[120px] flex flex-col justify-center items-center ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600 hover:shadow-gray-900/50' 
                  : 'bg-white border-gray-200 hover:shadow-lg'
              }`}
            >
              <Icon className={`w-12 h-12 mb-3 flex-shrink-0 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`} />
              <h3 className={`font-bold text-lg md:text-xl lg:text-2xl transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>{name}</h3>
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
