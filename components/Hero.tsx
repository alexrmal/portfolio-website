'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useTheme } from '@/contexts/ThemeContext'
import Image from 'next/image'

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const { isDarkMode } = useTheme()
  const fullText = "Hi, I'm Alex."
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
        // Hide cursor after typing is complete
        setTimeout(() => setShowCursor(false), 1000)
      }
    }, 100) // Adjust speed as needed
    
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className={`pt-16 min-h-screen flex items-center justify-center transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-blue-50 to-indigo-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12"
        >
          {/* Profile Picture */}
          <div className="flex-shrink-0">
            <div className="relative w-64 h-[450px] lg:w-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gray-200 dark:bg-gray-700">
              <Image
                src="/profile-picture.jpg"
                alt="Alex Maldonado"
                width={320}
                height={500}
                className="object-cover object-center w-full h-full"
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              <span className={`transition-colors duration-300 ${
                isDarkMode ? 'text-yellow-400' : 'text-primary-600'
              }`}>{displayedText}</span>
              {showCursor && <span className="animate-pulse">|</span>}
            </h1>
            <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto lg:mx-0 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              First-generation Salvadoran-American studying Computer Science at Stanford. 
              Focused on using software to expand access—especially for underrepresented communities—through practical, scalable tools.
              Interests include backend + infrastructure + machine learning.
            </p>
            <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto lg:mx-0 transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              When I'm not coding or studying, I enjoy playing video games and playing basketball. Feel free to connect with me! I'm always looking for new opportunities and exciting projects.
            </p>

            <div className="mb-8">
              <p className="text-xl md:text-2xl mb-6 transition-colors duration-300">
                <strong className={`transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Email:</strong> <a 
                  href="mailto:alexrm@stanford.edu" 
                  className={`transition-colors duration-300 hover:underline ${
                    isDarkMode ? 'text-yellow-400 hover:text-yellow-300' : 'text-primary-600 hover:text-primary-700'
                  }`}
                >alexrm [at] stanford [dot] edu</a>
              </p>
            </div>

            <div className="flex justify-center lg:justify-start space-x-4 mb-8">
              <motion.a 
                href="https://github.com/alexrmal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-700 transition-colors"
                title="GitHub"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/alexrenemaldonado/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
                title="LinkedIn"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}