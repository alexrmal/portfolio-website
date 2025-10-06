'use client'

import { motion } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'

export default function Projects() {
  const { isDarkMode } = useTheme()

  const projects = [
    {
      title: 'Autonomous GPU Cluster',
      technologies: 'Python | JavaScript | HTML | CSS | Flask | WebSocket | NumPy | pynvml',
      githubUrl: 'https://github.com/alexrmal/autonomous-gpu-cluster',
      achievements: [
        'Achieved 100% job recovery and 0 downtime by engineering a fault-tolerant GPU cluster simulator that reallocated tasks across 8 worker nodes within 6 seconds of failure.',
        'Increased job throughput by 60% by designing an asynchronous scheduling engine with heartbeat monitoring and automatic requeue logic.',
        'Accelerated system monitoring and debugging speed by 75% by building an interactive Flask + WebSocket dashboarding visualizing NVML GPU metrics, job retries, and node utilization in real time.'
      ]
    },
    {
      title: 'Personal Efficiency Dashboard',
      technologies: 'JavaScript | HTML | CSS | React | Node.js | Express.js | RESTful API | Recharts',
      githubUrl: 'https://github.com/alexrmal/time-logger',
      achievements: [
        'Built a full-stack web app to track gym, study, and work sessions with real-time monitoring and RESTful API architecture, achieving 100% uptime during testing.',
        'Developed an interactive analytics dashboard using Recharts, enabling users to visualize performance trends and export data to CSV across 7-, 30-, and 365-day timeframes.',
        'Automated deployment workflow through GitHub Actions and modular React components, reducing update time by 80% and demonstrating end-to-end development proficiency.'
      ]
    },
    {
      title: 'Portfolio Website',
      technologies: 'TypeScript | HTML | CSS | React | Node.js',
      achievements: [
        'Developed and deployed a responsive personal portfolio using React.js, HTML, CSS, and Node.js, achieving 100% Lighthouse performance and sub-1s page load time through image compression and code splitting.',
        'Integrated dynamic project data via JSON and modular components, allowing new projects to be added or updated instantly without manual HTML edits – improving scalability and maintenance speed by 70%.'
      ]
    }
  ]

  return (
    <section id="projects" className={`py-20 transition-colors duration-300 ${
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
          }`}>Projects</h2>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
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
                    {project.title}
                  </h3>
                  <h4 className={`text-2xl font-semibold transition-colors duration-300 ${
                    isDarkMode ? 'text-yellow-400' : 'text-primary-600'
                  }`}>
                    {project.technologies}
                  </h4>
                </div>
                {project.githubUrl && (
                  <div className="mt-2 md:mt-0">
                    <motion.a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                        isDarkMode 
                          ? 'bg-gray-700 text-white hover:bg-gray-600 border border-gray-600' 
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </motion.a>
                  </div>
                )}
              </div>

              <ul className="space-y-3">
                {project.achievements.map((achievement, achievementIndex) => (
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
