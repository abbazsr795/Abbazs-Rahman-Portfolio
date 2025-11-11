import Image from "next/image";
import Github from "./icons/github-1.png"
import Linkedin from "./icons/linkedin-1.png"
import Instagram from "./icons/instagram-1.png"
import X from "./icons/x-1.png"
import LinkIcon from "./icons/link-1.png"
import { resumeData } from "./data/resume.tsx";

export default function Home() {

  const { name, title, tagline, socials, experience, projects, education, certifications, skills, awards } = resumeData;

  return (
    <div className="flex md:flex-row flex-col h-screen text-wrap">
      {/* LEFT SIDE */}
      <div className="bg-white p-10 md:w-1/2 md:h-full md:relative">
        <p className="font-mono font-semibold text-7xl mb-10">{name}</p>
        <p className="font-mono font-normal text-2xl mb-10">{title}</p>
        <p className="font-mono font-normal text-2xl mb-10 text-sky-700">{tagline}</p>

        <div className="h-max grid content-end md:absolute md:bottom-10 md:left-10">
          <div className="flex flex-row gap-10 mb-5">
            {socials.map((s, i) => (
              <a key={i} href={s.link} target="_blank" rel="noopener noreferrer">
                <Image src={i === 0 ? Github : i === 1 ? Linkedin : i === 2 ? Instagram : X} width={40} alt={s.name} />
              </a>
            ))}
          </div>
          <p className="font-mono font-normal text-xl text-sky-700 mb-5">Built by me.</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="bg-white p-10 md:w-1/2 md:h-full md:overflow-auto">
        {/* EXPERIENCE */}
        <section className="mb-20">
          <h2 className="font-mono font-bold text-5xl mb-5">Experience</h2>
          {experience.map((exp, i) => (
            <div key={i} className="mb-8">
              <p className="font-mono font-bold text-2xl mb-2">
                {exp.role} {exp.company && `| ${exp.company}`}
              </p>
              <p className="font-mono text-xl mb-2">{exp.period}</p>
              <ul className="list-disc pl-5 text-2xl font-mono mb-2 text-balance">
                {exp.description.map((line, j) => <li key={j}>{line}</li>)}
              </ul>
            </div>
          ))}
        </section>

        {/* PROJECTS */}
        <section className="mb-20">
          <h2 className="font-mono font-bold text-5xl mb-5">Projects</h2>
          {projects.map((proj, i) => (
            <div key={i} className="mb-8">
              <a href={proj.link} className="flex flex-row gap-3 hover:border-b border-black w-fit">
                <p className="font-mono font-bold text-2xl mb-2">{proj.title}</p>
                <Image className="h-fit flex self-center" alt="link" src={LinkIcon} width={20}></Image>
              </a>
              <p className="font-mono text-2xl mb-2">{proj.desc}</p>
            </div>
          ))}
        </section>

        {/* EDUCATION */}
        <section className="mb-20">
          <h2 className="font-mono font-bold text-5xl mb-5">Education</h2>
          {education.map((edu, i) => (
            <div key={i} className="mb-5">
              <p className="font-mono font-bold text-2xl">{edu.school}</p>
              <p className="font-mono text-2xl">{edu.degree}</p>
              <p className="font-mono text-xl">{edu.period}</p>
              <p className="font-mono text-xl mb-2">{edu.gpa}</p>
            </div>
          ))}
        </section>

        {/* CERTIFICATIONS */}
        <section className="mb-20">
          <h2 className="font-mono font-bold text-5xl mb-5">Certifications</h2>
          <ul className="list-disc pl-5 text-2xl font-mono">
            {certifications.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </section>

        {/* SKILLS */}
        <section className="mb-20">
          <h2 className="font-mono font-bold text-5xl mb-5">Skills</h2>
          <div className="flex flex-row flex-wrap gap-5">
            {skills.map((s, i) => (
              <p key={i} className="font-mono text-xl p-3 bg-sky-200 rounded-md">{s}</p>
            ))}
          </div>
        </section>

        {/* AWARDS */}
        <section>
          <h2 className="font-mono font-bold text-5xl mb-5">Honors & Awards</h2>
          <ul className="list-disc pl-5 text-2xl font-mono">
            {awards.map((a, i) => <li key={i}>{a}</li>)}
          </ul>
        </section>
      </div>
    </div>
  );
}
