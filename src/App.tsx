import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronUp, Github, Linkedin, Mail, Award, GraduationCap, Briefcase, Sun, Moon, Download } from 'lucide-react';
import { Code, Server, Database } from 'lucide-react';
import { Button, Grid, Typography, Card, CardContent, CardHeader } from '@mui/material';
import im3 from '../public/im3.png';  // Import the image file

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    // Check system preference for dark mode
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
      <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gradient-to-b from-[#FAFAFA] to-[#F0F0F0]'} transition-colors duration-300`}>
        {/* Navigation */}
        <nav className={`fixed w-full ${isDarkMode ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-sm z-50 transition-all duration-300 shadow-sm`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center h-16 relative">
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <NavLink href="#home" isDark={isDarkMode}>Home</NavLink>
                <NavLink href="#about" isDark={isDarkMode}>About</NavLink>
                <NavLink href="#experience" isDark={isDarkMode}>Experience</NavLink>
                <NavLink href="#skills" isDark={isDarkMode}>Skills</NavLink>
                <NavLink href="#certifications" isDark={isDarkMode}>Certifications</NavLink>
                <NavLink href="#projects" isDark={isDarkMode}>Projects</NavLink>
                <NavLink href="#contact" isDark={isDarkMode}>Contact</NavLink>
              </div>

              {/* Theme Toggle and Resume Download - Desktop */}
              <div className="hidden md:flex items-center space-x-4 absolute right-0">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleDarkMode}
                    className={`p-2 rounded-full ${isDarkMode ? 'text-yellow-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </motion.button>
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/Aparnaa_Resume.pdf"
                    download
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                        isDarkMode
                            ? 'bg-blue-600 hover:bg-blue-700 text-white'
                            : 'bg-[#00A3A3] hover:bg-[#008383] text-white'
                    } transition-colors duration-300`}
                >
                  <Download size={16} />
                  <span>Resume</span>
                </motion.a>
              </div>

              {/* Mobile menu button */}
              <button
                  className={`md:hidden absolute right-0 ${isDarkMode ? 'text-white' : 'text-[#1A2B50]'}`}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
              <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className={`md:hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <MobileNavLink href="#home" onClick={() => setIsMenuOpen(false)} isDark={isDarkMode}>Home</MobileNavLink>
                  <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)} isDark={isDarkMode}>About</MobileNavLink>
                  <MobileNavLink href="#experience" onClick={() => setIsMenuOpen(false)} isDark={isDarkMode}>Experience</MobileNavLink>
                  <MobileNavLink href="#skills" onClick={() => setIsMenuOpen(false)} isDark={isDarkMode}>Skills</MobileNavLink>
                  <MobileNavLink href="#certifications" onClick={() => setIsMenuOpen(false)} isDark={isDarkMode}>Certifications</MobileNavLink>
                  <MobileNavLink href="#projects" onClick={() => setIsMenuOpen(false)} isDark={isDarkMode}>Projects</MobileNavLink>
                  <MobileNavLink href="@" onClick={() => setIsMenuOpen(false)} isDark={isDarkMode}>Contact</MobileNavLink>

                  {/* Theme Toggle and Resume Download - Mobile */}
                  <div className="flex items-center justify-between px-3 py-2">
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={toggleDarkMode}
                        className={`p-2 rounded-full ${isDarkMode ? 'text-yellow-400 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </motion.button>
                    <motion.a
                        whileTap={{ scale: 0.95 }}
                        href="/Aparnaa_Resume.pdf"
                        download
                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg ${
                            isDarkMode
                                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                : 'bg-[#00A3A3] hover:bg-[#008383] text-white'
                        } transition-colors duration-300`}
                    >
                      <Download size={16} />
                      <span>Resume</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className={`pt-24 pb-32 relative overflow-hidden ${isDarkMode ? 'text-white' : ''}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">

              {/* Left Side (Image - 40%) */}
              <div className="relative z-0 flex justify-center md:col-span-2">
                <img
                    src={im3}
                    alt="Cute geeky girl coding"
                    className="w-[90%] md:w-[100%] max-w-[500px] h-auto object-contain"
                />
              </div>

              {/* Right Side (Content - 60%) */}
              <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative z-10 text-center md:text-left md:col-span-3"
              >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className={`text-5xl md:text-6xl font-bold ${isDarkMode ? 'text-white' : 'text-[#1A2B50]'} mb-6`}
                >
                  Aparna Alamanda
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-2xl md:text-3xl text-[#00A3A3] font-semibold mb-6"
                >
                  Software Engineer | Data & Cloud Enthusiast
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className={`text-lg md:text-xl ${isDarkMode ? 'text-gray-300' : 'text-[#333333]'} mb-6`}
                >
                  Turning data into insights, code into solutions, and coffee into code! 🚀 Whether it's crafting full-stack apps, crunching big data, or architecting in the cloud, I love building things that make an impact.
                </motion.p>

                <TypeWriter
                    words={[
                      'Machine Learning',
                      'Data Analytics',
                      'Full-Stack Development',
                      'Cloud Architecture'
                    ]}
                />

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="mt-8 px-8 py-3 bg-[#00A3A3] text-white rounded-lg hover:bg-[#008383] transition-colors duration-300"
                >
                  View My Work
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>



        {/* Timeline Section */}
        <section id="experience" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-[#1A2B50]'} text-center mb-12`}
            >
              Experience & Education
            </motion.h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#00A3A3]"></div>

              {/* Timeline Items */}
              <div className="space-y-24">
                {/* 2023 - Present: Masters (left side) */}
                <div className="relative flex justify-center items-center">
                  {/* Left Content - Masters */}
                  <div className="w-1/2 pr-8 text-right">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} shadow-lg`}
                    >
                      <div className="flex justify-end items-center mb-2">
                        <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-[#1A2B50]'} mr-2`}>
                          MEng in Computer Science
                        </h3>
                        <GraduationCap className="text-[#00A3A3]" size={20} />
                      </div>
                      <p className="text-[#00A3A3] font-medium">Virginia Tech</p>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>2023 - 2025</p>
                      <p className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-[#333333]'}`}>
                        Focus on Machine Learning and Data Analytics
                      </p>
                    </motion.div>
                  </div>

                  {/* Center Point */}
                  <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="absolute w-4 h-4 bg-[#00A3A3] rounded-full border-4 border-white dark:border-gray-800"
                  />

                  {/* Empty Right Side */}
                  <div className="w-1/2 pl-8"></div>
                </div>

                {/* 2020 - 2023: Work Experience (right side) */}
                <div className="relative flex justify-center items-center">
                  {/* Empty Left Side */}
                  <div className="w-1/2 pr-8"></div>

                  {/* Center Point */}
                  <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="absolute w-4 h-4 bg-[#00A3A3] rounded-full border-4 border-white dark:border-gray-800"
                  />

                  {/* Right Content - Work Experience */}
                  <div className="w-1/2 pl-8">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} shadow-lg`}
                    >
                      <div className="flex items-center mb-2">
                        <Briefcase className="text-[#00A3A3] mr-2" size={20} />
                        <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-[#1A2B50]'}`}>
                          Data Analyst
                        </h3>
                      </div>
                      <p className="text-[#00A3A3] font-medium">Tata Consultancy Services</p>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>2020 - 2023</p>
                      <ul className="mt-2 list-disc list-inside space-y-1">
                        <li className={isDarkMode ? 'text-gray-300' : 'text-[#333333]'}>
                          Led data analysis initiatives resulting in 25% improvement in process efficiency
                        </li>
                        <li className={isDarkMode ? 'text-gray-300' : 'text-[#333333]'}>
                          Developed ML models for predictive analytics with 90% accuracy
                        </li>
                        <li className={isDarkMode ? 'text-gray-300' : 'text-[#333333]'}>
                          Collaborated with cross-functional teams to implement data-driven solutions
                        </li>
                      </ul>
                    </motion.div>
                  </div>
                </div>

                {/* 2016 - 2020: Bachelors (left side) */}
                <div className="relative flex justify-center items-center">
                  {/* Left Content - Bachelors */}
                  <div className="w-1/2 pr-8 text-right">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} shadow-lg`}
                    >
                      <div className="flex justify-end items-center mb-2">
                        <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-[#1A2B50]'} mr-2`}>
                          B.Tech in Computer Science
                        </h3>
                        <GraduationCap className="text-[#00A3A3]" size={20} />
                      </div>
                      <p className="text-[#00A3A3] font-medium">Jawaharlal Nehru Technological University</p>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>2016 - 2020</p>
                      <p className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-[#333333]'}`}>
                        First Class with Distinction
                      </p>
                    </motion.div>
                  </div>

                  {/* Center Point */}
                  <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="absolute w-4 h-4 bg-[#00A3A3] rounded-full border-4 border-white dark:border-gray-800"
                  />

                  {/* Empty Right Side */}
                  <div className="w-1/2 pl-8"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className={`py-20 ${isDarkMode ? 'bg-gray-900' : ''}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-[#1A2B50]'} text-center mb-12`}
            >
              Certifications & Recognition
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Certifications Column */}
              <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
              >
                <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-[#1A2B50]'} flex items-center`}>
                  <Award className="mr-2 text-[#00A3A3]" size={24} />
                  Certifications
                </h3>
                <ul className="space-y-4">
                  <CertificationItem
                      title="AWS Certified Cloud Practitioner"
                      issuer="AWS"
                      isDark={isDarkMode}
                  />
                  <CertificationItem
                      title="Django for Python Developers"
                      issuer="Udemy"
                      isDark={isDarkMode}
                  />
                  <CertificationItem
                      title="Python Certification, Data Mining"
                      issuer="NPTEL"
                      isDark={isDarkMode}
                  />
                  <CertificationItem
                      title="NLP using Python for Machine Learning"
                      issuer="LinkedIn"
                      isDark={isDarkMode}
                  />
                  <CertificationItem
                      title="Big Data Workshop"
                      issuer="JNTUV"
                      isDark={isDarkMode}
                  />
                </ul>
              </motion.div>

              {/* Recognition Column */}
              <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
              >
                <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-[#1A2B50]'} flex items-center`}>
                  <Award className="mr-2 text-[#00A3A3]" size={24} />
                  Recognition
                </h3>
                <ul className="space-y-4">
                  <RecognitionItem
                      description="Received spot on award in June 2021 for proactively handling user survey campaigns at Tata Consultancy Services."
                      isDark={isDarkMode}
                  />
                  <RecognitionItem
                      description="Received spot on award in July 2022 for suggesting ML models for process improvement at Tata Consultancy Services."
                      isDark={isDarkMode}
                  />
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-[#1A2B50]'} text-center mb-12`}
            >
              Featured Projects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ModernProjectCard
                  title="Text Summarization Model"
                  description="Developed an advanced NLP model for automatic text summarization with 85% accuracy"
                  tags={["Python", "NLP", "TensorFlow"]}
                  image="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80"
                  githubUrl="https://github.com/yourusername/text-summarization"
                  isDark={isDarkMode}
              />
              <ModernProjectCard
                  title="UniNav"
                  description="Campus navigation app with real-time indoor positioning and AR guidance"
                  tags={["React Native", "Node.js", "MongoDB"]}
                  image="https://images.unsplash.com/photo-1631624215749-b10b3dd7bca7?auto=format&fit=crop&q=80"
                  githubUrl="https://github.com/yourusername/uninav"
                  isDark={isDarkMode}
              />
              <ModernProjectCard
                  title="Disease Risk Prediction"
                  description="ML-based system for early disease risk assessment using patient data"
                  tags={["Python", "Scikit-learn", "PostgreSQL"]}
                  image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80"
                  githubUrl="https://github.com/yourusername/disease-prediction"
                  isDark={isDarkMode}
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={`py-20 ${isDarkMode ? 'bg-gray-900' : ''}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-[#1A2B50]'} text-center mb-12`}
            >
              Skills & Expertise
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <SkillCategory
                  title="Programming Languages"
                  skills={["Python", "Java", "C++", "JavaScript", "TypeScript"]}
                  icon={<Code />}
                  isDark={isDarkMode}
              />
              <SkillCategory
                  title="Frameworks"
                  skills={["React", "Node.js", "Spring", "TensorFlow", "PyTorch"]}
                  icon={<Server />}
                  isDark={isDarkMode}
              />
              <SkillCategory
                  title="Databases"
                  skills={["MySQL", "PostgreSQL", "MongoDB", "Redis"]}
                  icon={<Database />}
                  isDark={isDarkMode}
              />
              <SkillCategory
                  title="Cloud & Tools"
                  skills={["AWS", "Azure", "Docker", "Kubernetes", "Git"]}
                  icon={<Server />}
                  isDark={isDarkMode}
              />
            </div>
          </div>
        </section>
        {/*<SkillsSection />*/}
        {/* Contact Section */}
        <section id="contact" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-[#1A2B50]'} text-center mb-12`}
            >
              Get In Touch
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
              >
                <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-[#333333]'} mb-8`}>
                  I'm currently open to new opportunities and would love to hear from you. Whether you have a question or just want to say hi, feel free to reach out!
                </p>
                <div className="space-y-6">
                  <motion.a
                      whileHover={{ scale: 1.05 }}
                      href="mailto:aparna.alamanda@gmail.com"
                      className={`flex items-center space-x-4 ${isDarkMode ? 'text-gray-300 hover:text-[#00A3A3]' : 'text-[#333333] hover:text-[#00A3A3]'} transition-colors duration-300`}
                  >
                    <Mail size={24} />
                    <span>aparna.alamanda@gmail.com</span>
                  </motion.a>
                  <motion.a
                      whileHover={{ scale: 1.05 }}
                      href="https://www.linkedin.com/in/aparnaalamanda/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-4 ${isDarkMode ? 'text-gray-300 hover:text-[#00A3A3]' : 'text-[#333333] hover:text-[#00A3A3]'} transition-colors duration-300`}
                  >
                    <Linkedin size={24} />
                    <span>LinkedIn</span>
                  </motion.a>
                  <motion.a
                      whileHover={{ scale: 1.05 }}
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-4 ${isDarkMode ? 'text-gray-300 hover:text-[#00A3A3]' : 'text-[#333333] hover:text-[#00A3A3]'} transition-colors duration-300`}
                  >
                    <Github size={24} />
                    <span>GitHub</span>
                  </motion.a>
                </div>
              </motion.div>
              <motion.form
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-[#333333]'} mb-2`}>Name</label>
                  <input
                      type="text"
                      id="name"
                      className={`w-full px-4 py-2 rounded-lg ${
                          isDarkMode
                              ? 'bg-gray-700 border-gray-600 text-white focus:ring-[#00A3A3] focus:border-[#00A3A3]'
                              : 'border border-gray-300 focus:ring-2 focus:ring-[#00A3A3] focus:border-transparent'
                      }`}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-[#333333]'} mb-2`}>Email</label>
                  <input
                      type="email"
                      id="email"
                      className={`w-full px-4 py-2 rounded-lg ${
                          isDarkMode
                              ? 'bg-gray-700 border-gray-600 text-white focus:ring-[#00A3A3] focus:border-[#00A3A3]'
                              : 'border border-gray-300 focus:ring-2 focus:ring-[#00A3A3] focus:border-transparent'
                      }`}
                  />
                </div>
                <div>
                  <label htmlFor="message" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-[#333333]'} mb-2`}>Message</label>
                  <textarea
                      id="message"
                      rows={4}
                      className={`w-full px-4 py-2 rounded-lg ${
                          isDarkMode
                              ? 'bg-gray-700 border-gray-600 text-white focus:ring-[#00A3A3] focus:border-[#00A3A3]'
                              : 'border border-gray-300 focus:ring-2 focus:ring-[#00A3A3] focus:border-transparent'
                      }`}
                  ></textarea>
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full px-8 py-3 bg-[#00A3A3] text-white rounded-lg hover:bg-[#008383] transition-colors duration-300"
                >
                  Send Message
                </motion.button>
              </motion.form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`py-8 ${isDarkMode ? 'bg-gray-900' : 'bg-[#1A2B50]'} text-white`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>© 2024 Aparna Alamanda. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <motion.a
                    whileHover={{ scale: 1.2 }}
                    href="https://www.linkedin.com/in/aparnaalamanda/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#00A3A3] transition-colors duration-300"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.2  }}
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#00A3A3] transition-colors duration-300"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.2 }}
                    href="mailto:aparna.alamanda@gmail.com"
                    className="hover:text-[#00A3A3] transition-colors duration-300"
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </div>
          </div>
        </footer>

        {/* Scroll to top button */}
        {showScrollTop && (
            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 bg-[#00A3A3] text-white p-3 rounded-full shadow-lg hover:bg-[#008383] transition-colors duration-300 z-50"
            >
              <ChevronUp size={24} />
            </motion.button>
        )}
      </div>
  );
}

// Navigation Link Components
const NavLink = ({ href, children, isDark }: { href: string; children: React.ReactNode; isDark: boolean }) => (
    <motion.a
        whileHover={{ scale: 1.1 }}
        href={href}
        className={`${isDark ? 'text-gray-300 hover:text-white' : 'text-[#333333] hover:text-[#00A3A3]'} transition-colors duration-300`}
    >
      {children}
    </motion.a>
);

const MobileNavLink = ({ href, children, onClick, isDark }: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
  isDark: boolean;
}) => (
    <motion.a
        whileTap={{ scale: 0.95 }}
        href={href}
        className={`block px-3 py-2 ${isDark ? 'text-gray-300 hover:text-white' : 'text-[#333333] hover:text-[#00A3A3]'} transition-colors duration-300`}
        onClick={onClick}
    >
      {children}
    </motion.a>
);

// Timeline Item Component
const TimelineItem = ({ position, item, isDark, duration = 1 }: {
  position: 'left' | 'right';
  item: {
    type: string;
    title: string;
    organization: string;
    period: string;
    description: string | string[];
  };
  isDark: boolean;
  duration?: number;
}) => {
  // Calculate height based on duration
  // For example, each year could equal 100px height
  const minHeight = 120; // Minimum card height
  const heightPerYear = 40; // Additional height per year
  const cardHeight = minHeight + (duration * heightPerYear);

  const icon = item.type === 'education' ?
      <GraduationCap className="text-[#00A3A3]" size={20} /> :
      <Briefcase className="text-[#00A3A3]" size={20} />;

  return (
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative flex justify-center items-center"
      >
        {/* Left Content */}
        {position === 'left' && (
            <div className="w-1/2 pr-8 text-right">
              <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'} shadow-lg`}
                  style={{ minHeight: `${cardHeight}px` }}
              >
                <div className="flex justify-end items-center mb-2">
                  <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-[#1A2B50]'} mr-2`}>{item.title}</h3>
                  {icon}
                </div>
                <p className="text-[#00A3A3] font-medium">{item.organization}</p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.period}</p>
                {typeof item.description === 'string' ? (
                    <p className={`mt-2 ${isDark ? 'text-gray-300' : 'text-[#333333]'}`}>{item.description}</p>
                ) : (
                    <ul className="mt-2 list-disc list-inside space-y-1">
                      {item.description.map((point, index) => (
                          <li key={index} className={isDark ? 'text-gray-300' : 'text-[#333333]'}>{point}</li>
                      ))}
                    </ul>
                )}
              </motion.div>
            </div>
        )}

        {/* Right Content */}
        {position === 'right' && (
            <div className="w-1/2 pl-8">
              <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`p-4 rounded-lg ${isDark ? 'bg-gray-700' : 'bg-gray-50'} shadow-lg`}
                  style={{ minHeight: `${cardHeight}px` }}
              >
                <div className="flex items-center mb-2">
                  {icon}
                  <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-[#1A2B50]'} ml-2`}>{item.title}</h3>
                </div>
                <p className="text-[#00A3A3] font-medium">{item.organization}</p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.period}</p>
                {typeof item.description === 'string' ? (
                    <p className={`mt-2 ${isDark ? 'text-gray-300' : 'text-[#333333]'}`}>{item.description}</p>
                ) : (
                    <ul className="mt-2 list-disc list-inside space-y-1">
                      {item.description.map((point, index) => (
                          <li key={index} className={isDark ? 'text-gray-300' : 'text-[#333333]'}>{point}</li>
                      ))}
                    </ul>
                )}
              </motion.div>
            </div>
        )}

        {/* Center Point */}
        <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="absolute w-4 h-4 bg-[#00A3A3] rounded-full border-4 border-white dark:border-gray-800"
        />

        {/* Empty Side */}
        {position === 'left' && <div className="w-1/2 pl-8"></div>}
        {position === 'right' && <div className="w-1/2 pr-8"></div>}
      </motion.div>
  );
};

// Certification Item Component
const CertificationItem = ({ title, issuer, isDark }: {
  title: string;
  issuer: string;
  isDark: boolean;
}) => (
    <motion.li
        whileHover={{ x: 5 }}
        className={`flex items-start ${isDark ? 'text-gray-300' : 'text-[#333333]'}`}
    >
      <div className="min-w-5 mt-1">
        <div className="w-2 h-2 bg-[#00A3A3] rounded-full"></div>
      </div>
      <div className="ml-4">
        <h4 className="font-medium">{title}</h4>
        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{issuer}</p>
      </div>
    </motion.li>
);

// Recognition Item Component
const RecognitionItem = ({ description, isDark }: {
  description: string;
  isDark: boolean;
}) => (
    <motion.li
        whileHover={{ x: 5 }}
        className={`flex items-start ${isDark ? 'text-gray-300' : 'text-[#333333]'}`}
    >
      <div className="min-w-5 mt-1">
        <div className="w-2 h-2 bg-[#FF7F6E] rounded-full"></div>
      </div>
      <div className="ml-4">
        <p>{description}</p>
      </div>
    </motion.li>
);

// Modern Project Card Component
const ModernProjectCard = ({ title, description, tags, image, githubUrl, isDark }: {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl: string;
  isDark: boolean;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        className={`group relative overflow-hidden rounded-xl ${isDark ? 'bg-gray-700' : 'bg-white'} shadow-lg transition-all duration-300`}
    >
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors duration-300"
        >
          <Github size={20} />
        </motion.a>
      </div>
      <div className="p-6">
        <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-[#1A2B50]'} mb-2 group-hover:text-[#00A3A3] transition-colors duration-300`}>
          {title}
        </h3>
        <p className={`${isDark ? 'text-gray-300' : 'text-[#333333]'} mb-4`}>{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
              <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm ${
                      isDark
                          ? 'bg-gray-600 text-gray-300'
                          : 'bg-[#F0F0F0] text-[#1A2B50]'
                  }`}
              >
            {tag}
          </span>
          ))}
        </div>
      </div>
    </motion.div>
);

// Skill Category Component
const SkillCategory = ({ title, skills, icon, isDark }: {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  isDark: boolean;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        className={`p-6 ${isDark ? 'bg-gray-800' : 'bg-gray-50'} rounded-xl hover:shadow-lg transition-all duration-300`}
    >
      <div className="flex items-center space-x-3 mb-4">
        <div className="text-[#00A3A3]">{icon}</div>
        <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-[#1A2B50]'}`}>{title}</h3>
      </div>
      <div className="space-y-2">
        {skills.map((skill, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-2"
            >
              <div className="w-2 h-2 bg-[#FF7F6E] rounded-full"></div>
              <span className={isDark ? 'text-gray-300' : ''}>{skill}</span>
            </motion.div>
        ))}
      </div>
    </motion.div>
);

// Typewriter Effect Component
const TypeWriter = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
      <div className="h-8">
        <motion.span
            key={words[index]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#FF7F6E] text-xl"
        >
          {words[index].substring(0, subIndex)}
        </motion.span>
      </div>
  );
};

export default App;



const SkillsSection = () => {
  return (
      <section id="skills" style={{ padding: '20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Skills & Expertise
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={6} lg={3}>
              <Card>
                <CardHeader title="Programming Languages" />
                <CardContent>
                  <ul>
                    {["Python", "Java", "C++", "JavaScript", "TypeScript"].map((skill) => (
                        <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Card>
                <CardHeader title="Frameworks" />
                <CardContent>
                  <ul>
                    {["React", "Node.js", "Spring", "TensorFlow", "PyTorch"].map((skill) => (
                        <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Grid>
            {/* Add more categories as needed */}
          </Grid>
        </div>
      </section>
  );
};
