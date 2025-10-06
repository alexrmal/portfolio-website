'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'

export default function Experience() {
  const { isDarkMode } = useTheme()

  const experiences = [
    {
      company: 'NVIDIA',
      position: 'Summer Bridge Fellow',
      location: 'New York, NY',
      duration: 'June 2025 — August 2025',
      achievements: [
        'Selected to explore NVIDIA\'s cutting-edge product ecosystem, gaining exposure to advancements in AI frameworks and high-performance computing.',
        'Built a professional network by connecting with 30+ engineers and alumni interns, strengthening technical insight.',
        'Enhanced career development by completing a resume workshop resulting in a 30% increase in interview success rate.'
      ]
    },
    {
      company: 'Society of Latinx Engineers (SOLE)',
      position: 'LaIR Tutor',
      location: '',
      duration: 'January 2025 — Current',
      achievements: [
        'Led bi-weekly 90-minute one-on-one tutoring sessions in Python and C++ for CS 106A & CS 106B students.',
        'Developed targeted review materials and practice problems on variables, control flow, data structures, and recursion.',
        'Coached students in debugging strategies and problem-solving to build confidence and independence.'
      ]
    }
  ]

  return (
    <section id="experience" className={`py-20 transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-white'
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
          }`}>Experience</h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`rounded-xl p-8 transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-gray-50 border border-gray-200'
              }`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {experience.position}
                  </h3>
                  <h4 className={`text-2xl font-semibold transition-colors duration-300 ${
                    isDarkMode ? 'text-yellow-400' : 'text-primary-600'
                  }`}>
                    {experience.company}
                  </h4>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <div className={`inline-block px-3 py-1 rounded-full text-lg font-mono font-medium transition-colors duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-700 text-gray-300 border border-gray-600' 
                      : 'bg-gray-100 text-gray-600 border border-gray-300'
                  }`}>
                    {experience.duration}
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {experience.achievements.map((achievement, achievementIndex) => (
                  <motion.li
                    key={achievementIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (index * 0.2) + (achievementIndex * 0.1) }}
                    viewport={{ once: true }}
                    className={`flex items-start transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    <span className={`mr-3 mt-1.5 text-sm transition-colors duration-300 ${
                      isDarkMode ? 'text-yellow-400' : 'text-primary-600'
                    }`}>
                      •
                    </span>
                    <span className="text-lg">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
