'use client'
import { useEffect, useRef } from 'react'

const experiences = [
  {
    company: 'Miovision Technologies',
    role: 'Data Science Intern',
    period: 'Sep. 2025 - Dec. 2025',
    description: `Maintained data pipelines with 400M+ records using Python and SQL.\n
                Reduced data load times by 60% in ELT workflows built with Snowflake.`,
    tags: ['Snowflake', 'ELT Workflows', 'Data Pipelines', 'AWS', 'SQL', 'PowerShell'],
  },
  {
    company: 'Greenhouse',
    role: 'Data Analyst Intern',
    period: 'Jan. 2025 - Apr. 2025',
    description: `Improved accuracy of order delivery details to 95%+.
                Cut machinery downtime by 50% using monitoring automations built using Azure.`,
    tags: ['Javascript', 'Azure', 'RESTful APIs', 'SQL', 'Power BI', 'Power Query', 'Power Automate'],
  },
  {
    company: 'Beyond Sciences Initiative',
    role: 'Data Analyst',
    period: 'May 2024 - Dec. 2024',
    description: `Utilized Python and Pandas to clean CSV files with 1000+ conference registrant entries.`,
    tags: ['Python', 'Pandas', 'Excel', 'Data Cleaning']
  },
  {
    company: 'University of Waterloo',
    role: 'AI and Cloud Project Assistant',
    period: 'May 2024 - Aug. 2024',
    description: `Completed all deliverables 15% ahead of schedule, using Jira to manage tasks.`,
    tags: ['Azure', 'Jira', 'Project Management'],
  },
]

const education = [
  {
    institution: 'University of Waterloo',
    degree: 'Bachelor of Mathematics, Honours Statistics (Co-op)',
    period: '2023 — 2028',
    note: 'President of Events, University of Waterloo Badminton Club',
    tags: ['Algorithm Design', 'Statistics', 'Computational Discrete Optimization', 'Linear Algebra 2']
  },
]

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)

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
          <h2 className="font-display text-4xl font-light text-black">Where I've Made Impact</h2>
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
                <h3 className="font-display text-2xl text-black italic">{exp.role}</h3>
                <p className="font-body text-sm text-[#433a3f] text-leading-loose">{exp.description}</p>
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
                <h3 className="font-display text-2xl italic text-black">{edu.degree}</h3>
                {edu.note && <p className="font-body text-sm text-[#433a3f] mt-2">{edu.note}</p>}
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