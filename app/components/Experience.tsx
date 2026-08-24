'use client'
import { useEffect, useRef, useState } from 'react'

const cyclingWords = ['learning', 'working', 'building', 'contributing']

const experiences = [
  {
    company: 'AssistIQ',
    role: 'Software Engineering Intern',
    period: 'Sep. 2026 - Dec. 2026',
    description: [
      'Building REST APIs, web/iOS features, and CV pipelines to track material usage and optimize billing efficiency in healthcare systems',
    ],
    tags: ['TypeScript', 'React', 'Swift', 'REST APIs', 'Mobile Development', 'Computer Vision', 'Data Pipelining'],
  },
  {
    company: 'Miovision Technologies',
    role: 'Data Science Intern',
    period: 'Sep. 2025 - Dec. 2025',
    description: [
      'Architected large-scale ELT pipelines using Snowflake to process 400M+ records across 30+ regions, reducing data load times by 65%',
      'Engineered PowerShell scripts to automate ingestion of raw JSON files from AWS S3',
      'Resolved dashboard load failures by using Parquet to achieve 100x compression on annual traffic data',
      'Developed Python scripts to validate ingested data prior to downstream transformation in Snowflake',
    ],
    tags: ['Snowflake', 'ELT Workflows', 'Data Pipelining', 'AWS', 'SQL', 'PowerShell'],
  },
  {
    company: 'Greenhouse',
    role: 'Data Analyst Intern',
    period: 'Jan. 2025 - Apr. 2025',
    description: [
      'Resolved a silent failure in a legacy JavaScript service affecting 20% of Shopify sales, eliminating 40+ hours/week of manual corrections',
      'Developed a Python/OpenCV pipeline to detect product containers that bypassed the sanitation step, storing flagged events in Azure Blob Storage and syncing results to Excel for review',
      'Implemented a Power Automate workflow that transforms machine downtime data using a Python Azure function, and then sends Microsoft Teams alerts via PowerShell, cutting downtime by 50%',
    ],
    tags: ['Javascript', 'Azure', 'SQL', 'Power Automate', 'Power BI', 'Power Query'],
  },
  {
    company: 'Beyond Sciences Initiative',
    role: 'Data Analyst',
    period: 'May 2024 - Dec. 2024',
    description: [
      'Utilized Python and Pandas to clean CSV files with 1000+ conference registrant entries',
      'Analyzed results in Excel to identify efficient marketing allocation between varying demographics',
    ],
    tags: ['Python', 'Pandas', 'Excel', 'Data Cleaning']
  },
  {
    company: 'University of Waterloo',
    role: 'AI and Cloud Project Assistant',
    period: 'May 2024 - Aug. 2024',
    description: [
      'Coordinated Jira-based sprint planning, delivering project milestones 15% ahead of schedule',
    ],
    tags: ['Azure', 'Jira', 'Project Management'],
  },
]

const education = [
  {
    institution: 'University of Waterloo',
    degree: 'Bachelor of Mathematics, Honours Statistics (Co-op)',
    period: 'Sep. 2023 — Apr. 2028',
    note: [
      'President of Events, University of Waterloo Badminton Club',
    ],
    tags: ['Algorithms', 'Statistics', 'Network Flow Theory', 'Number Theory']
  },
]

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const [wordIndex, setWordIndex] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
        setWordVisible(false)
        setTimeout(() => {
            setWordIndex(i => (i + 1) % cyclingWords.length)
            setWordVisible(true)
        }, 400)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.08 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-15">
          <p className="font-body text-xs tracking-[0.22em] uppercase text-black font-light mb-4">Experience</p>
          <h2 className="font-display text-4xl font-light text-black">
            Where I've been {' '}
            <span
                className="text-black transition-opacity duration-300"
                style={{ opacity: wordVisible ? 1 : 0 }}
            >
                {cyclingWords[wordIndex]}
            </span> 
          </h2> {/*Experiences that built me... Projects I built into experience*/}
        </div>

        {/* Work experience */}
        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="reveal group border-t border-sand last:border-b py-10 grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 hover:bg-cream/50 transition-colors px-2 -mx-2 rounded-sm"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="space-y-1">
                <p className="font-body font-light text-xs tracking-widest text-black">{exp.period}</p>
                <p className="font-display text-lg font-light text-black">{exp.company}</p>
              </div>
              <div className="space-y-3">
                <h3 className="font-display text-2xl text-black">{exp.role}</h3>
                <ul className="font-body text-sm text-[#433a3f] list-disc list-outside pl-5 space-y-1 marker:text-ember">
                  {exp.description.map((point, j) => (
                    <li key={j} className="leading-relaxed">{point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-1">
                  {exp.tags.map(tag => (
                    <span key={tag} className="tag text-[#433a3f] border-stone/50 text-[0.65rem]">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="reveal mt-15">
          <p className="font-body text-xs tracking-[0.22em] uppercase text-black font-medium mb-8">Education</p>
          {education.map((edu, i) => (
            <div key={i} className="border-t border-sand py-8 grid md:grid-cols-[200px_1fr] gap-6 md:gap-12">
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-black">{edu.period}</p>
                <p className="font-display text-lg font-light text-black mt-1">{edu.institution}</p>
              </div>

              <div className="space-y-3">
                <h3 className="font-display text-2xl text-black">{edu.degree}</h3>
                {edu.note && (
                  <ul className="font-body text-sm text-[#433a3f] list-disc list-outside pl-5 space-y-1 mt-2 marker:text-ember">
                    {edu.note.map((point, j) => (
                      <li key={j} className="leading-relaxed">{point}</li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2 pt-1">
                    {edu.tags.map(tag => (
                    <span key={tag} className="tag text-[#433a3f] border-stone/50 text-[0.65rem]">{tag}</span>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}