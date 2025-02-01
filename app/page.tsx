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
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">Philip Laussermair.</h1>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-700 dark:text-gray-400 mb-6">I build enterprise solutions that serve millions of users.</h2>
          <div className="max-w-2xl">
            <p className="text-gray-700 dark:text-gray-400 text-lg">
              I'm a Solutions Architect at{''}
              <span className="inline-flex items-center">
                <Image
                  src={theme === 'dark' 
                    ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tAtyxafpyRVee3ubOPaglAEWbNL7u3.png"
                    : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/deloitte-logo-black-4gF8dzjdE8M8KDk8E8MIFzMsuFoAEH.png"
                  }
                  alt="Deloitte"
                  width={80}
                  height={20}
                  className="ml-1 translate-y-[3px]"
                />
              </span> I design enterprise-scale, cloud-native systems to modernize how Americans interact with the IRS.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="relative w-full max-w-[400px] aspect-square mx-auto">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Headshot%202024.jpg-i174VDXrTtN70hXrfYvqy8gvvmJwRW.jpeg"
              alt="Philip Laussermair"
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
            I thrive on turning <strong>complex business challenges</strong> into <strong>technical solutions</strong>. As a <strong>Solutions Architect</strong>, I combine <strong>deep technical expertise</strong> with a practical understanding of <strong>enterprise needs</strong>. I'm passionate about distributed systems, <strong>cloud architecture</strong>, and simplifying complex concepts for others.
          </p>
          <p>
            When I'm not designing microservices or optimizing cloud infrastructure, I enjoy <strong>mentoring</strong> junior developers and leading technical workshops. My background in sales engineering helps me connect technical possibilities with <strong>business value</strong>.
          </p>
          <p>
            Outside of work, I'm always <strong>learning</strong> and exploring new ideas, whether hiking outdoors, reading about tech and <strong>personal development</strong>, or spending time with friends and family. I believe in balancing professional ambition with personal growth for a <strong>fulfilling life</strong>.
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
            title="Solutions Architect"
            company="Deloitte Consulting | Internal Revenue Service (IRS)"
            date="01/2023 – Present"
            projects={[
              {
                name: "Taxpayer Web Application, Individual Online Account",
                responsibilities: [
                  "Led feature teams to enhance self-service capabilities for millions of taxpayers",
                  "Designed scalable microservices using Java, Spring Boot, React, and AWS",
                  "Presented solution architectures to secure stakeholder buy-in",
                  "Improved governance processes, reducing documentation review time"
                ]
              },
              {
                name: "Fraud Detection & Compliance System Modernization",
                responsibilities: [
                  "Architected future state for a legacy compliance system",
                  "Conducted comprehensive system analysis using TOGAF methodology",
                  "Facilitated technical forums to align stakeholders on proposed solutions"
                ]
              }
            ]}
          />
          <ExperienceItem
            title="Site Reliability Engineer"
            company="Deloitte Consulting | Internal Revenue Service (IRS)"
            date="01/2022 – 01/2023"
            projects={[
              {
                name: "Taxpayer Web Application, Individual Online Account",
                responsibilities: [
                  "Maintained platform reliability during 150% YoY traffic growth, ensuring uninterrupted user access",
                  "Served as the main contact during production incidents, resolving critical issues and maintaining client trust",
                  "Reduced P1/P2 support tickets by 35% through process improvements and cross-functional collaboration"
                ]
              }
            ]}
          />
          <ExperienceItem
            title="Business Analyst"
            company="Deloitte Consulting | Internal Revenue Service (IRS)"
            date="01/2021 – 01/2022"
            projects={[
              {
                name: "Submissions Processing, Federal Tax Return Forms",
                responsibilities: [
                  "Facilitated requirements gathering, translating legislative updates into actionable project plans",
                  "Managed client relationships, ensuring deliverables exceeded expectations and built long-term trust"
                ]
              }
            ]}
          />
          <ExperienceItem
            title="Sales & Business Development Activities"
            company="Deloitte Consulting"
            date="01/2021 – Present"
            projects={[
              {
                name: "Cloud Architecture and Business Development",
                responsibilities: [
                  "Completed Deloitte's Cloud Architect Program with focus on event-driven architecture",
                  "Developed a scalable tax processing prototype using AWS services",
                  "Contributed to high-value government contract proposals"
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
            <h3 className="text-gray-900 dark:text-white text-lg md:text-xl font-semibold">The University of Florida, College of Engineering</h3>
            <p className="text-blue-600 dark:text-blue-400 text-sm md:text-base">Gainesville, FL</p>
            <p className="text-gray-700 dark:text-gray-400 text-sm md:text-base">Bachelor of Science, Computer Science</p>
            <p className="text-gray-700 dark:text-gray-400 text-sm md:text-base">Honors: Cum Laude</p>
            <p className="text-gray-700 dark:text-gray-400 text-sm md:text-base">Minor: Sales Engineering, Certificate: Engineering Leadership</p>
          </div>
          <div>
            <h3 className="text-gray-900 dark:text-white text-lg md:text-xl font-semibold">Extracurriculars</h3>
            <ul className="mt-2 md:mt-4 space-y-2 md:space-y-4 text-gray-700 dark:text-gray-400 list-none pl-2 md:pl-4">
              <li>
                <p className="font-medium text-gray-900 dark:text-white text-sm md:text-base">Sigma Nu Fraternity, President</p>
                <p className="text-sm md:text-base">• Led the strategic planning & operations of a 70-member chapter with an annual budget of $260,000</p>
              </li>
              <li>
                <p className="font-medium text-gray-900 dark:text-white text-sm md:text-base">Association of Sales Engineers, President & Founder</p>
                <p className="text-sm md:text-base">• Founded and led the organization to promote the sales engineering career path and hiring opportunities</p>
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
            I'm always open to discussing innovative ideas, solving challenging problems, and exploring opportunities to build impactful solutions. Feel free to reach out if you're looking for a collaborative partner, a solutions architect, or just want to chat about enterprise technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://linkedin.com/in/philip-laussermair/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 border border-blue-600 dark:border-blue-400 rounded-md text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-black transition-colors text-sm md:text-base"
            >
              <Linkedin className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Connect on LinkedIn
            </a>
            <a
              href="https://github.com/plaussermair"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 border border-blue-600 dark:border-blue-400 rounded-md text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-black transition-colors text-sm md:text-base"
            >
              <Github className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              View GitHub Profile
            </a>
            <a
              href="mailto:phil.laussermair@gmail.com"
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
          href="/Philip_Laussermair_Resume.pdf" 
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
