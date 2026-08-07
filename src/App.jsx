import React from 'react';
import { 
  Mail, Phone, ExternalLink, Code2, 
  Server, Database, Award, Briefcase, GraduationCap, MapPin, MonitorSmartphone
} from 'lucide-react';

// Custom SVG components for Brand Icons (Since Lucide doesn't include logos)
const Github = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Portfolio() {
  const skills = [
    { icon: <Code2 size={24} />, category: "Languages", items: ["Java", "JavaScript", "C", "C++", "SQL"] },
    { icon: <Server size={24} />, category: "Backend", items: ["Spring Boot", "Spring MVC", "RESTful APIs", "Node.js"] },
    { icon: <MonitorSmartphone size={24} />, category: "Frontend & Mobile", items: ["React.js", "Next.js", "HTML5", "CSS3", "Thymeleaf", "AJAX", "Flutter"] },
    { icon: <Database size={24} />, category: "Databases & Tools", items: ["MySQL", "PostgreSQL", "Socket.io", "Git", "AWS EC2", "Postman"] }
  ];

  const experience = [
    {
      title: "Full Stack Developer - Freelance",
      company: "Shivalingeshwara Arts & Shakti Motors",
      location: "Haveri, Karnataka",
      date: "Jan 2025 - Present",
      points: [
        "Designed and built a full-stack Service Center & Business Management System from the ground up.",
        "Developed RESTful APIs using Spring Boot to handle order management, customer records, and finance/billing workflows.",
        "Built server-rendered UI with Java, Thymeleaf, and MySQL, and implemented full CRUD operations.",
        "Built real-time dashboards using JavaScript and AJAX for live order and revenue tracking.",
        "Deployed the application on AWS EC2 and managed version control with Git.",
        "Currently re-architecting the application with React/Next.js, Node.js, PostgreSQL, and Socket.io."
      ]
    },
    {
      title: "Software Development Intern",
      company: "Kodnest Technologies",
      location: "Bangalore, Karnataka",
      date: "Jun 2023 - Dec 2023",
      points: [
        "Worked on backend development using Java and MySQL.",
        "Contributed to real-world, production-style projects alongside cross-functional teams."
      ]
    }
  ];

  const projects = [
    {
      title: "KodBook",
      description: "A full-stack social media platform with account creation, profile management, and photo posts with likes/comments.",
      tech: ["Java", "Spring", "MySQL", "HTML", "CSS"],
      year: "2024"
    },
    {
      title: "ShopKart",
      description: "An e-commerce platform covering product management, cart, and checkout workflows.",
      tech: ["Java", "Spring", "Thymeleaf"],
      year: "2024"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30">
      
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
            Shantaveeresh V <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Sheelavantar</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-slate-400 mb-8">
            Full Stack Developer | Java • Spring Boot • React.js
          </p>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-slate-400 mb-10">
            Full Stack Developer with production experience designing, building, and maintaining live business-critical web applications. 
            Strong command of OOP, MVC architecture, and RESTful API design. Currently extending systems with React, Node.js, Flutter, and Socket.io for real-time functionality. 
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold">
            <a href="mailto:shantaveereshvs@gmail.com" className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all">
              <Mail size={18} className="text-cyan-400" /> shantaveereshvs@gmail.com
            </a>
            <a href="tel:8431983269" className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all">
              <Phone size={18} className="text-cyan-400" /> +91 8431983269
            </a>
            <a href="https://github.com/svsGithub10" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all">
              <Github size={18} className="text-cyan-400" /> GitHub
            </a>
            <a href="https://linkedin.com/in/shantaveeresh-sheelavantar-3193061b7" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all">
              <Linkedin size={18} className="text-cyan-400" /> LinkedIn
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-32 space-y-32">
        
        {/* Technical Skills */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <Code2 size={32} className="text-cyan-500" />
            <h2 className="text-3xl font-bold text-white">Technical Arsenal</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white/[0.03] border border-white/10 p-6 rounded-2xl hover:-translate-y-1 hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.15)] transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium rounded-md bg-slate-800/80 text-cyan-200 border border-cyan-500/20">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <Briefcase size={32} className="text-cyan-500" />
            <h2 className="text-3xl font-bold text-white">Professional Experience</h2>
          </div>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-0">
                <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                  <div className="mb-4 md:mb-0 md:col-span-1 pt-1">
                    <p className="text-cyan-400 font-semibold">{exp.date}</p>
                    <p className="text-sm text-slate-500 flex items-center gap-1 mt-1">
                      <MapPin size={14} /> {exp.location}
                    </p>
                  </div>
                  <div className="md:col-span-3 bg-white/[0.03] border border-white/10 p-8 rounded-2xl relative">
                    <div className="absolute left-[-37px] md:left-[-17px] top-8 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-500"></div>
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-lg text-slate-400 mb-6 font-medium">{exp.company}</p>
                    <ul className="space-y-3">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300 leading-relaxed">
                          <span className="text-cyan-500 mt-1.5 leading-none">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <Server size={32} className="text-cyan-500" />
            <h2 className="text-3xl font-bold text-white">Selected Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white/[0.03] border border-white/10 p-8 rounded-3xl flex flex-col h-full hover:bg-white/[0.05] transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  <span className="text-sm font-medium text-slate-500 bg-slate-900 px-3 py-1 rounded-full">{project.year}</span>
                </div>
                <p className="text-slate-400 mb-8 flex-grow leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-white/10">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-semibold text-slate-300 bg-slate-800 px-3 py-1.5 rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Achievements */}
        <section className="grid md:grid-cols-2 gap-12">
          
          <div>
            <div className="flex items-center gap-4 mb-8">
              <GraduationCap size={28} className="text-cyan-500" />
              <h2 className="text-2xl font-bold text-white">Education</h2>
            </div>
            <div className="bg-white/[0.03] border border-white/10 p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-white mb-2">Bachelor of Engineering (B.E.)</h3>
              <p className="text-cyan-400 font-medium mb-4">Computer Science and Engineering</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Smt Kamala Sri Venkappa M. Agadi College of Engineering & Technology, Lakshmeshwar, Dist. Gadag
              </p>
              <div className="flex justify-between items-center border-t border-white/10 pt-4 mt-auto">
                <span className="text-sm font-semibold text-slate-500">2019 - 2023</span>
                <span className="text-sm font-bold text-white bg-cyan-500/20 border border-cyan-500/30 px-4 py-1.5 rounded-full">CGPA: 7.43</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-8">
              <Award size={28} className="text-cyan-500" />
              <h2 className="text-2xl font-bold text-white">Achievements</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-white/[0.03] border border-white/10 p-6 rounded-2xl flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0 mt-1">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Best Project of the Year 2023</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    KSCST Student Project Programme (46th Series) for published IoT research: "Chatura Suraksha Kavacha Smart Safety Helmet for Mine Workers" (IJSRCSEIT).
                  </p>
                </div>
              </div>
              <div className="bg-white/[0.03] border border-white/10 p-6 rounded-2xl flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0 mt-1">
                  <Code2 size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Certifications & Competitions</h4>
                  <ul className="text-sm text-slate-400 leading-relaxed space-y-2">
                    <li>• HackerRank: SQL (Basic & Intermediate), Java (Basics)</li>
                    <li>• freeCodeCamp: Responsive Web Design</li>
                    <li>• Winner, Code Wizard (SKSVMACET Melanze 2023)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </section>
      </main>

      <footer className="border-t border-white/10 py-10 text-center">
        <p className="text-slate-500 text-sm">
          Built with React & Tailwind CSS • Shantaveeresh V Sheelavantar
        </p>
      </footer>
    </div>
  );
}