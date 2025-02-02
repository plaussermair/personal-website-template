'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Fira_Code } from 'next/font/google'
import { Github, Linkedin, Mail } from 'lucide-react'
import Skills from './components/Skills'
import { useIntersectionObserver } from './hooks/useIntersectionObserver'
import './styles/animations.css'
import { useTheme } from './contexts/ThemeContext'

const firaCode = Fira_Code({ subsets: ['latin'] })

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return isMobile;
}

export default function Home() {
  const [isClient, setIsClient] = useState(false)
  const isMobile = useIsMobile();
  const { theme } = useTheme()

  useEffect(() => {
    setIsClient(true)

    // Add smooth scrolling with offset
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          const offset = 120; // Adjust this value based on your header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleClick);
      });
    };
  }, [])

  const [heroRef, heroVisible] = useIntersectionObserver();
  const [aboutRef, aboutVisible] = useIntersectionObserver();
  const [skillsRef, skillsVisible] = useIntersectionObserver();
  const [experienceRef, experienceVisible] = useIntersectionObserver();
  const [educationRef, educationVisible] = useIntersectionObserver();
  const [connectRef, connectVisible] = useIntersectionObserver();

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <div id="top" className="max-w-6xl mx-auto pt-24">
      {/* Hero Section */}
      <section ref={heroRef} className={`min-h-[80vh] grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-on-scroll ${heroVisible ? 'is-visible' : ''}`}>
        <div>
          <p className={`${firaCode.className} text-blue-600 dark:text-blue-400 mb-5`}>Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">John Doe.</h1>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-700 dark:text-gray-400 mb-6">I build scalable solutions for modern problems.</h2>
          <div className="max-w-2xl">
            <p className="text-gray-700 dark:text-gray-400 text-lg">
              I'm a Software Engineer at{''}
                <span className="inline-flex items-center">
                <Image
                  src={theme === 'dark' 
                  ? "/logo-placeholder.png"
                  : "/logo-placeholder.png"
                  }
                  alt="Company Logo"
                  width={80}
                  height={20}
                  className="ml-1 translate-y-[3px]"
                />
                </span> I specialize in building scalable, cloud-native applications that solve real-world problems.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="relative w-full max-w-[400px] aspect-square mx-auto">
            <Image
              src="/avatar placeholder.png"
              alt="John Doe"
              fill
              className="object-cover rounded-lg border border-gray-200 dark:border-transparent"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className={`scroll-mt-[120px] pt-16 pb-8 md:py-16 animate-on-scroll ${aboutVisible ? 'is-visible' : ''}`}>
        <h2 className="text-2xl font-bold mb-8 md:mb-12 text-gray-900 dark:text-white">
          <span className="text-blue-600 dark:text-blue-400 font-mono mr-2">01.</span>
          About Me
        </h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-400 max-w-3xl">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className={`scroll-mt-[120px] pt-16 pb-8 md:py-16 animate-on-scroll ${skillsVisible ? 'is-visible' : ''}`}>
        <Skills />
      </section>

      {/* Experience Section */}
      <section id="experience" ref={experienceRef} className={`scroll-mt-[120px] pt-16 pb-8 md:py-16 animate-on-scroll ${experienceVisible ? 'is-visible' : ''}`}>
        <h2 className="text-2xl font-bold mb-8 md:mb-12 text-gray-900 dark:text-white">
          <span className="text-blue-600 dark:text-blue-400 font-mono mr-2">03.</span>
          Experience
        </h2>
        <div className="relative pl-6 md:pl-8 border-l-2 border-blue-400">
          <ExperienceItem
            title="Software Engineer"
            company="Tech Corp Inc."
            date="01/2023 – Present"
            projects={[
              {
                name: "Project Alpha",
                responsibilities: [
                  "Developed scalable microservices using modern technologies",
                  "Collaborated with cross-functional teams to deliver high-quality solutions",
                  "Optimized system performance and reduced latency"
                ]
              },
              {
                name: "Project Beta",
                responsibilities: [
                  "Designed and implemented cloud-native architectures",
                  "Conducted system analysis and proposed improvements",
                  "Facilitated technical discussions with stakeholders"
                ]
              }
            ]}
          />
          <ExperienceItem
            title="Junior Developer"
            company="Startup XYZ"
            date="01/2021 – 01/2023"
            projects={[
              {
                name: "Project Gamma",
                responsibilities: [
                  "Maintained platform reliability during rapid growth",
                  "Resolved critical production issues",
                  "Improved support processes and reduced ticket resolution time"
                ]
              }
            ]}
          />
        </div>
      </section>

      {/* Education Section */}
      <section id="education" ref={educationRef} className={`scroll-mt-[120px] pt-16 pb-8 md:py-16 animate-on-scroll ${educationVisible ? 'is-visible' : ''}`}>
        <h2 className="text-2xl font-bold mb-8 md:mb-12 text-gray-900 dark:text-white">
          <span className="text-blue-600 dark:text-blue-400 font-mono mr-2">04.</span>
          Education
        </h2>
        <div className="space-y-6 md:space-y-8">
          <div>
            <h3 className="text-gray-900 dark:text-white text-lg md:text-xl font-semibold">University of Example</h3>
            <p className="text-blue-600 dark:text-blue-400 text-sm md:text-base">City, Country</p>
            <p className="text-gray-700 dark:text-gray-400 text-sm md:text-base">Bachelor of Science, Computer Science</p>
            <p className="text-gray-700 dark:text-gray-400 text-sm md:text-base">Honors: Cum Laude</p>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white text-lg md:text-xl font-semibold">Extracurriculars</h3>
            <ul className="mt-2 md:mt-4 space-y-2 md:space-y-4 text-gray-700 dark:text-gray-400 list-none pl-2 md:pl-4">
              <li>
                <p className="font-medium text-gray-900 dark:text-white text-sm md:text-base">Student Organization, President</p>
                <p className="text-sm md:text-base">• Led a team of 50 members and managed a budget of $100,000</p>
              </li>
              <li>
                <p className="font-medium text-gray-900 dark:text-white text-sm md:text-base">Tech Club, Founder</p>
                <p className="text-sm md:text-base">• Organized workshops and hackathons to promote technical skills</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Let's Connect Section */}
      <section id="connect" ref={connectRef} className={`scroll-mt-[120px] pt-16 pb-8 md:py-16 text-center animate-on-scroll ${connectVisible ? 'is-visible' : ''}`}>
        <h2 className="text-2xl font-bold mb-8 md:mb-12 text-gray-900 dark:text-white">
          <span className="text-blue-600 dark:text-blue-400 font-mono mr-2">05.</span>
          Let's Connect
        </h2>
        <div className="space-y-6 md:space-y-8 max-w-3xl mx-auto">
          <p className="text-gray-700 dark:text-gray-400 text-sm md:text-base">
            I'm always open to discussing new opportunities, collaborations, or just chatting about technology. Feel free to reach out!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://linkedin.com/in/sample/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 border border-blue-600 dark:border-blue-400 rounded-md text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-black transition-colors text-sm md:text-base"
            >
              <Linkedin className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Connect on LinkedIn
            </a>
            <a
              href="https://github.com/sample"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 border border-blue-600 dark:border-blue-400 rounded-md text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-black transition-colors text-sm md:text-base"
            >
              <Github className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              View GitHub Profile
            </a>
            <a
              href="mailto:sample@example.com"
              className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 border border-blue-600 dark:border-blue-400 rounded-md text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-black transition-colors text-sm md:text-base"
            >
              <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Send an Email
            </a>
          </div>
        </div>
      </section>

      {/* View Full Resume Link */}
      <div className="text-center py-8 md:py-12">
        <a 
          href="/Sample Resume.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors text-sm md:text-base"
        >
          <span>View Full Resume</span>
          <svg 
            className="ml-2 w-3 h-3 md:w-4 md:h-4" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M7 17l9.2-9.2M17 17V7H7"/>
          </svg>
        </a>
      </div>
    </div>
  )
}

function ExperienceItem({ title, company, date, projects }) {
  return (
    <div className="mb-8 md:mb-12">
      <div className="absolute w-3 h-3 md:w-4 md:h-4 bg-blue-600 dark:bg-blue-400 rounded-full -left-[7px] md:-left-[9px] mt-1.5"></div>
      <div className="grid grid-cols-1 md:grid-cols-[1fr,auto] gap-2 md:gap-8 items-start">
        <div>
          <h3 className="text-gray-900 dark:text-white text-lg md:text-xl font-semibold">{title}</h3>
          <p className="text-blue-600 dark:text-blue-400 text-sm md:text-base">{company}</p>
          <ul className="mt-2 md:mt-4 space-y-2 md:space-y-4 text-gray-700 dark:text-gray-400 list-none pl-2 md:pl-4">
            {projects.map((project, index) => (
              <li key={index}>
                <p className="font-medium">• {project.name}</p>
                <ul className="mt-1 md:mt-2 space-y-1 md:space-y-2 pl-4">
                  {project.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} className="flex items-center text-sm md:text-base">
                      <span className="inline-block w-1 h-1 md:w-1.5 md:h-1.5 border border-gray-400 rounded-full mr-2 flex-shrink-0"></span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="font-mono text-gray-700 dark:text-gray-400 text-sm md:text-base mt-2 md:mt-0">{date}</div>
      </div>
    </div>
  )
}