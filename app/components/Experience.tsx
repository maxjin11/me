'use client'
import { useEffect, useRef, useState } from 'react'

const cyclingWords = ['learning', 'working', 'building', 'contributing']

// Highlight quantitative impact (400M+, 65%, 100x, 1000+) in emerald monospace.
const METRIC = /(?<![A-Za-z])(\d[\d.,]*(?:M|K|B)?\+?(?:%|x)?)/
function withMetrics(text: string) {
  return text.split(METRIC).map((part, i) =>
    part && METRIC.test(part)
      ? <span key={i} className="font-mono font-medium text-accent">{part}</span>
      : <span key={i}>{part}</span>
  )
}

const experiences = [
  {
    company: 'AssistIQ',
    role: 'Software Engineering Intern',
    period: 'Sep. 2026 — Dec. 2026',
    description: [
      'Building REST APIs, web/iOS features, and CV pipelines to track material usage and optimize billing efficiency in healthcare systems',
    ],
    tags: ['TypeScript', 'React', 'Swift', 'REST APIs', 'Mobile Development', 'Computer Vision', 'Data Pipelining'],
  },
  {
    company: 'Miovision Technologies',
    role: 'Data Science Intern',
    period: 'Sep. 2025 — Dec. 2025',
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
    period: 'Jan. 2025 — Apr. 2025',
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
    period: 'May 2024 — Dec. 2024',
    description: [
      'Utilized Python and Pandas to clean CSV files with 1000+ conference registrant entries',
      'Analyzed results in Excel to identify efficient marketing allocation between varying demographics',
    ],
    tags: ['Python', 'Pandas', 'Excel', 'Data Cleaning']
  },
  {
    company: 'University of Waterloo',
    role: 'AI and Cloud Project Assistant',
    period: 'May 2024 — Aug. 2024',
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
    <section id="experience" ref={sectionRef} className="py-28 px-6 bg-paper">
      <div className="max-w-6xl mx-auto">
        <div className="reveal mb-16">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4">Experience</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-ink">
            Where I&apos;ve been{' '}
            <span
                className="text-accent transition-opacity duration-300"
                style={{ opacity: wordVisible ? 1 : 0 }}
            >
                {cyclingWords[wordIndex]}
            </span>
          </h2>
        </div>

        {/* Work experience */}
        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="reveal group border-t border-line last:border-b py-10 grid md:grid-cols-[210px_1fr] gap-4 md:gap-12 hover:bg-panel/60 transition-colors px-3 -mx-3 rounded-sm"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="space-y-1.5">
                <p className="font-mono text-xs tracking-wider text-muted">{exp.period}</p>
                <p className="font-display text-lg font-medium text-ink">{exp.company}</p>
              </div>
              <div className="space-y-4">
                <h3 className="font-display text-xl font-medium text-ink">{exp.role}</h3>
                <ul className="font-body text-[0.875rem] text-muted list-disc list-outside pl-5 space-y-1.5 marker:text-accent/50">
                  {exp.description.map((point, j) => (
                    <li key={j} className="leading-relaxed">{withMetrics(point)}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-1">
                  {exp.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="reveal mt-20">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-8">Education</p>
          {education.map((edu, i) => (
            <div key={i} className="border-t border-line last:border-b py-10 grid md:grid-cols-[210px_1fr] gap-4 md:gap-12">
              <div className="space-y-1.5">
                <p className="font-mono text-xs tracking-wider text-muted">{edu.period}</p>
                <p className="font-display text-lg font-medium text-ink">{edu.institution}</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-display text-xl font-medium text-ink">{edu.degree}</h3>
                {edu.note && (
                  <ul className="font-body text-[0.875rem] text-muted list-disc list-outside pl-5 space-y-1.5 marker:text-accent/50">
                    {edu.note.map((point, j) => (
                      <li key={j} className="leading-relaxed">{point}</li>
                    ))}
                  </ul>
                )}
                <div className="flex flex-wrap gap-2 pt-1">
                    {edu.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
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
