export default function Experience() {
  return (
    <div className="relative">
      <div className="absolute w-4 h-4 bg-white border-2 border-gray-200 rounded-full -left-[41px] top-0" />
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      <div className="space-y-8">
        <div>
          <h3 className="font-semibold text-lg">Deloitte Consulting – New York, NY | Internal Revenue Service (IRS)</h3>
          <p className="text-sm text-gray-600">01/2021 – Present</p>
          
          <div className="mt-4 relative border-l border-gray-200 pl-4">
            <div>
              <h4 className="font-medium">Solutions Architect | 01/2023 – Present</h4>
              <p className="text-sm mt-1">Taxpayer Web Application, Individual Online Account</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                <li>Led feature teams tasked with top-priority business initiatives assigned directly by the IRS Commissioner, delivering self-service capabilities for 25M+ taxpayers</li>
                <li>Architected scalable, containerized microservice solutions using Java, Spring Boot, React, OpenShift, and AWS (EKS, DynamoDB, Lambda) in a hybrid cloud environment to ensure high availability and performance</li>
                <li>Secured buy-in from client directors by presenting solution architectures that addressed key business challenges</li>
                <li>Established governance processes, reducing technical documentation review cycles by 20%</li>
              </ul>
              <p className="text-sm mt-4">Fraud Detection & Compliance System Modernization</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                <li>Delivered a future state architecture for a 40-year-old compliance system that was ultimately approved by the CIO</li>
                <li>Performed legacy system analysis using TOGAF to develop business, data, application, and technology architectures for the current and target state system</li>
                <li>Facilitated technical forums aligning 100+ stakeholders with proposed solutions</li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="font-medium">Site Reliability Engineer | 01/2022 – 01/2023</h4>
              <p className="text-sm mt-1">Taxpayer Web Application, Individual Online Account</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                <li>Maintained platform reliability during 150% YoY traffic growth, ensuring uninterrupted user access</li>
                <li>Served as the main contact during production incidents, resolving critical issues and maintaining client trust</li>
                <li>Reduced P1/P2 support tickets by 35% through process improvements and cross-functional collaboration</li>
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="font-medium">Business Analyst | 01/2021 – 01/2022</h4>
              <p className="text-sm mt-1">Submissions Processing, Federal Tax Return Forms</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                <li>Facilitated requirements gathering, translating legislative updates into actionable project plans</li>
                <li>Managed client relationships, ensuring deliverables exceeded expectations and built long-term trust</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

