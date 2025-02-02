import { Github, Linkedin, Mail } from 'lucide-react'

export default function SocialSidebar() {
  return (
    <div className="fixed left-10 bottom-0 hidden xl:flex flex-col items-center gap-6 after:content-[''] after:w-[1px] after:h-[90px] after:bg-[#a8b2d1]">
      <a 
        href="https://github.com/sample" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-[#a8b2d1] hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-1 transition-all"
      >
        <Github size={20} />
      </a>
      <a 
        href="https://linkedin.com/in/sample/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-[#a8b2d1] hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-1 transition-all"
      >
        <Linkedin size={20} />
      </a>
      <a 
        href="mailto:sample@gmail.com"
        className="text-[#a8b2d1] hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-y-1 transition-all"
      >
        <Mail size={20} />
      </a>
    </div>
  )
}

