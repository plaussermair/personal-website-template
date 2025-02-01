export default function Skills() {
  const skills = {
    CERTIFICATIONS: [
      'AWS Solutions Architect – Associate',
      'AWS Certified Cloud Practitioner',
      'Microsoft Certified: Azure Fundamentals',
      'TOGAF 9 Foundation',
    ],
    'TECHNICAL SKILLS': [
      'API Design',
      'REST',
      'Java',
      'Python',
      'AWS',
      'Azure',
      'TOGAF',
      'Git',
    ],
  };

  return (
    <section id="skills" className="py-20">
      <h2 className="text-2xl font-bold mb-12 text-gray-900 dark:text-white">
        <span className="text-blue-600 dark:text-blue-400 font-mono mr-2">02.</span>
        Skills & Certifications
      </h2>

      {/* Mobile Layout */}
      <div className="md:hidden space-y-8">
        <div>
          <h3 className="text-blue-600 dark:text-blue-400 font-mono mb-4">CERTIFICATIONS</h3>
          <ul className="space-y-2">
            {skills.CERTIFICATIONS.map((item) => (
              <li key={item} className="text-gray-800 dark:text-white">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-blue-600 dark:text-blue-400 font-mono mb-4">TECHNICAL SKILLS</h3>
          <ul className="space-y-2">
            {skills['TECHNICAL SKILLS'].map((item) => (
              <li key={item} className="text-gray-800 dark:text-white">{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-blue-600 dark:text-blue-400 font-mono mb-4">CERTIFICATIONS</h3>
          <ul className="space-y-2">
            {skills.CERTIFICATIONS.map((item) => (
              <li key={item} className="text-gray-800 dark:text-white">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-blue-600 dark:text-blue-400 font-mono mb-4">TECHNICAL SKILLS</h3>
          <ul className="space-y-2">
            {skills['TECHNICAL SKILLS'].slice(0, 4).map((item) => (
              <li key={item} className="text-gray-800 dark:text-white">{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="h-8"></div>
          <ul className="space-y-2">
            {skills['TECHNICAL SKILLS'].slice(4).map((item) => (
              <li key={item} className="text-gray-800 dark:text-white">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}