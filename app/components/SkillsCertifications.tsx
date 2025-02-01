export default function SkillsCertifications() {
  return (
    <div className="relative">
      <div className="absolute w-4 h-4 bg-white border-2 border-gray-200 rounded-full -left-[41px] top-0" />
      <h2 className="text-2xl font-bold mb-4">Skills, Certifications & Awards</h2>
      <div className="space-y-6">
        <div>
          <h3 className="font-semibold text-lg">Certifications</h3>
          <ul className="list-disc pl-5 mt-2 text-gray-600">
            <li>AWS Solutions Architect – Associate</li>
            <li>AWS Certified Cloud Practitioner</li>
            <li>Microsoft Certified: Azure Fundamentals</li>
            <li>TOGAF 9 Foundation</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg">Technical Skills</h3>
          <p className="mt-2 text-gray-600">API Design, REST, Java, Python, C++, AWS, Azure, TOGAF, UML, BPM, Git, GenAI</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg">Awards</h3>
          <ul className="list-disc pl-5 mt-2 text-gray-600">
            <li>2x Outstanding Performance Award (Top Company Honor)</li>
            <li>3x Superior Talent Appreciation Reward Award (Top Performer Recognition)</li>
            <li>23x Applause Award (Leadership-Nominated Recognition Program)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

