export default function Education() {
  return (
    <div className="relative">
      <div className="absolute w-4 h-4 bg-white border-2 border-gray-200 rounded-full -left-[41px] top-0" />
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div>
        <h3 className="font-semibold text-lg">The University of Florida, College of Engineering – Gainesville, FL</h3>
        <p className="text-gray-600">Bachelor of Science, Computer Science</p>
        <p className="text-sm text-gray-600">Honors: Cum Laude</p>
        <p className="text-sm text-gray-600">Minor: Sales Engineering, Certificate: Engineering Leadership</p>
      </div>
      <div className="mt-6">
        <h3 className="font-semibold text-lg">Extracurriculars</h3>
        <ul className="list-disc pl-5 mt-2 space-y-4">
          <li>
            <p className="font-medium">Sigma Nu Fraternity, President</p>
            <p className="text-sm text-gray-600">Led the strategic planning & operations of a 70-member chapter with an annual budget of $260,000</p>
          </li>
          <li>
            <p className="font-medium">Association of Sales Engineers, President & Founder</p>
            <p className="text-sm text-gray-600">Founded and led the organization to promote the sales engineering career path and hiring opportunities</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

