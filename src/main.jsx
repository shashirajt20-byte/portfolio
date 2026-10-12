import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import "./styles.css";

const profile = {
  name: "Shashi Raj",
  email: "shashirajt20@gmail.com",
  github: "https://github.com/shashirajt20-byte",
  linkedin: "https://www.linkedin.com/in/shashi-raj-7207a31b0/",
};

const logo = (name) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`;

const skillGroups = [
  { title: "Languages", skills: [
    { name: "Java", icon: logo("java") }, { name: "C", icon: logo("c") }, { name: "SQL", textIcon: "SQL" }
  ]},
  { title: "Backend & Frameworks", skills: [
    { name: "Spring Boot", icon: logo("spring") }, { name: "Spring Data JPA", icon: logo("spring") },
    { name: "Spring Security", icon: logo("spring") }, { name: "Hibernate", icon: logo("hibernate") },
    { name: "RESTful APIs", textIcon: "API" }
  ]},
  { title: "Databases & Caching", skills: [
    { name: "PostgreSQL", icon: logo("postgresql") }, { name: "MySQL", icon: logo("mysql") },
    { name: "Oracle", icon: logo("oracle") }, { name: "H2 Database", textIcon: "H2" }
  ]},
  { title: "Tools & Platforms", skills: [
    { name: "Git", icon: logo("git") }, { name: "GitHub", icon: logo("github") },
    { name: "Linux / Unix", icon: logo("linux") }, { name: "Postman", icon: logo("postman") },
    { name: "Docker", icon: logo("docker") }, { name: "JUnit", icon: logo("junit") }
  ]},
  { title: "Core CS Concepts", skills: [
    { name: "Data Structures & Algorithms", textIcon: "DSA" }, { name: "OOPs", textIcon: "OOP" },
    { name: "DBMS", textIcon: "DB" }, { name: "Operating Systems", textIcon: "OS" },
    { name: "Computer Networks", textIcon: "CN" }
  ]}
];

const projects = [
  {
    number: "01", title: "Offline UPI Payment Protocol", subtitle: "Mesh-Networked Transactions",
    period: "AUG 2026 — SEPT 2026", accent: "OFFLINE PAYMENTS", image: "/images/upi-project.png",
    href: "/projects/offline-upi.html",
    description: "Built an offline, decentralized payment gateway enabling cryptographically signed transactions via device-to-device mesh networking without active internet access.",
    details: [
      "Built an offline, decentralized payment gateway enabling cryptographically signed transactions via device-to-device mesh networking without active internet access.",
      "Implemented hybrid end-to-end encryption combining RSA-OAEP for asymmetric key exchange and AES-GCM for packet-level confidentiality and tamper detection.",
      "Engineered idempotent settlement mechanisms with duplicate-payment protection, preventing race conditions and unauthorized double-spending during bridge sync.",
      "Built monitoring REST endpoints and real-time ledger dashboards to verify transaction statuses and ledger reconciliations."
    ],
    stack: ["Java","Spring Boot","Spring Data JPA","H2","REST APIs","RSA-OAEP","AES-GCM"]
  },
  {
    number: "02", title: "SMARTLOGIX", subtitle: "Route Optimization & Logistics Engine",
    period: "JUN 2026 — JUL 2026", accent: "LOGISTICS ENGINE", image: "/images/smartlogix-project.png",
    href: "/projects/smartlogix.html",
    description: "Developed an automated shipment dispatch engine in Spring Boot, automating driver and warehouse assignments and slashing manual processing overhead by approximately 99%.",
    details: [
      "Developed an automated shipment dispatch engine in Spring Boot, automating driver and warehouse assignments and slashing manual processing overhead by approximately 99%.",
      "Implemented Dijkstra's shortest-path algorithm with O((V+E)log V) time complexity, computing optimal routes within approximately 1.2 ms and executing end-to-end orchestration in under approximately 28 ms.",
      "Secured backend services with Spring Security and configured WebSocket endpoints to stream real-time GPS telemetry and live shipment updates to the frontend."
    ],
    stack: ["Java","Spring Boot","Spring Security","PostgreSQL","React","WebSocket","GraphHopper","JUnit"]
  },
  {
    number: "03", title: "LogStream", subtitle: "Distributed Log Analytics & Alerting Platform",
    period: "AUG 2026 — SEPT 2026", accent: "OBSERVABILITY", image: "/images/logstream-project.png",
    href: "/projects/logstream.html",
    description: "A distributed log analytics platform designed to ingest, index, search and analyze massive volumes of application logs with low-latency queries.",
    details: [
      "Storing and searching terabytes of application logs in a relational database (PostgreSQL) collapses under scan-heavy queries.",
      "A WHERE message LIKE '%timeout%' against 100M rows is a full table scan. LogStream inverts that model.",
      "Logs flow in as binary protobuf over gRPC, are inverted-indexed in Apache Lucene, and are queried through a purpose-built query language.",
      "The backend returns the exact matching log lines plus facets and histograms in single-digit milliseconds.",
      "PostgreSQL is retained only for metadata such as alert rules and tenants — never for raw log search."
    ],
    stack: ["Java","Spring Boot","gRPC","Apache Lucene","PostgreSQL"]
  }
];

const experiences = [
  { period: "SEP 2026 — DEC 2026", company: "Axlero Innovative Solutions", role: "Backend Engineer Intern", current: true },
  { period: "JAN 2026 — FEB 2026", company: "Civora Nexus Pvt. Ltd", role: "Backend Developer Intern" },
  { period: "JUN 2025 — JUL 2025", company: "RIT Roorkee", role: "Java Developer Intern" }
];

function App() {
  return <div className="page">
    <nav><div className="container nav-inner">
      <a href="#home" className="logo-name">SHASHI<span>.</span></a>
      <div className="nav-links">
        <a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a>
        <a href="#experience">Experience</a><a href="#contact">Contact</a>
      </div>
    </div></nav>

    <main id="home" className="hero"><div className="container hero-grid">
      <motion.div initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
        <div className="eyebrow"><span className="eyebrow-dot"></span>Available for Software Engineering Opportunities</div>
        <h1>Hi, I'm <span>Shashi.</span></h1>
        <div className="roles"><div className="role-primary">SOFTWARE ENGINEER</div><div className="role-secondary">SDE · BACKEND ENGINEER</div></div>
        <p className="hero-description">I build reliable backend systems, scalable APIs and database-driven applications using modern Java technologies.</p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-secondary">GitHub ↗</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary">LinkedIn ↗</a>
        </div>
      </motion.div>
      <motion.div className="hero-visual" initial={{opacity:0,scale:.92}} animate={{opacity:1,scale:1}} transition={{duration:.8,delay:.15}}>
        <div className="orb"></div><div className="code-card">
          <div className="window-top"><span></span><span></span><span></span></div>
          <div className="code-line"><i>public class</i> <b>Engineer</b> {"{"}</div>
          <div className="code-line">&nbsp;&nbsp;<i>String</i> <em>stack</em> =</div>
          <div className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;<strong>"Java + Spring Boot"</strong>;</div>
          <div className="code-line">&nbsp;&nbsp;<i>int</i> <em>dsaSolved</em> = <b>200</b>+;</div>
          <div className="code-line">&nbsp;&nbsp;<i>boolean</i> <em>backend</em> = <strong>true</strong>;</div>
          <div className="code-line">{"}"}</div>
        </div>
      </motion.div>
    </div></main>

    <div className="container"><div className="metrics">
      <div className="metric"><div className="metric-number">200+</div><div className="metric-label">DSA Problems Solved</div></div>
      <div className="metric"><div className="metric-number">03</div><div className="metric-label">Featured Projects</div></div>
      <div className="metric"><div className="metric-number">03</div><div className="metric-label">Internship Experiences</div></div>
    </div></div>

    <section id="about"><div className="container">
      <div className="section-heading"><div className="section-label">01 — About</div><h2 className="section-title">Who I am.</h2></div>
      <div className="about-grid"><div className="about-number">03</div>
        <p className="about-text">3rd-year Computer Science Engineering student and Software Engineer / Backend Engineer with hands-on experience building scalable backend systems and REST APIs. Solved with strong problem-solving skills. Primary stack: Java, Spring Boot, REST APIs.</p>
      </div>
    </div></section>

    <section id="skills"><div className="container">
      <div className="section-heading"><div className="section-label">02 — Skills</div><h2 className="section-title">My toolkit.</h2>
      <p className="section-subtitle">Technologies and computer science fundamentals I use to build backend systems and solve engineering problems.</p></div>
      <div className="skills-grid">{skillGroups.map(group=><motion.div className="skill-group" key={group.title} whileHover={{y:-2}}>
        <div className="skill-group-title">{group.title}</div><div className="skill-items">{group.skills.map(skill=>
          <div className="skill" key={skill.name}>{skill.icon?<img src={skill.icon} alt=""/>:<span className="skill-icon-text">{skill.textIcon}</span>}<span>{skill.name}</span></div>
        )}</div>
      </motion.div>)}</div>
    </div></section>

    <section id="projects"><div className="container">
      <div className="section-heading"><div className="section-label">03 — Projects</div><h2 className="section-title">Things I've built.</h2>
      <p className="section-subtitle">Backend-focused projects solving real-world problems across payments, logistics and observability.</p></div>
      <div className="projects">{projects.map(project=><motion.a href={project.href} className="project-card" key={project.title}
        initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.55}}>
        <div className="project-top"><div className="project-content">
          <div className="project-meta"><span className="project-number">{project.number}</span><span className="project-accent">{project.accent}</span></div>
          <h3 className="project-title">{project.title}</h3><div className="project-subtitle">{project.subtitle}</div><div className="project-period">{project.period}</div>
          <p className="project-description">{project.description}</p><div className="project-details">{project.details.map((d,i)=><div className="project-detail" key={i}>{d}</div>)}</div>
          {project.query&&<div className="project-query">{project.query}</div>}
          <div className="project-stack">{project.stack.map(item=><span className="tag" key={item}>{item}</span>)}</div>
          <div className="view-project">View project details →</div>
        </div><div className="project-image-wrap"><img src={project.image} alt={`${project.title} project`} className="project-image" onError={(e)=>{e.currentTarget.src=project.title==="Offline UPI Payment Protocol"?"/images/upi-project.svg":project.title==="SMARTLOGIX"?"/images/smartlogix-project.svg":"/images/logstream-project.svg"}}/></div></div>
      </motion.a>)}</div>
    </div></section>

    <section id="experience"><div className="container">
      <div className="section-heading"><div className="section-label">04 — Experience</div><h2 className="section-title">Where I've worked.</h2></div>
      <div className="timeline">{experiences.map(ex=><div className="experience" key={ex.company}>
        <span className={`timeline-dot ${ex.current?"current":""}`}></span><div className="experience-period">{ex.period}</div>
        <div className="experience-company">{ex.company}</div><div className="experience-role">{ex.role}{ex.current&&<span className="current-badge">CURRENT</span>}</div>
      </div>)}</div>
    </div></section>

    <section id="contact" className="contact"><div className="container">
      <div className="section-label">05 — Contact</div><h2 className="contact-title">Let's build something<br/><span>great.</span></h2>
      <p className="contact-text">Open to software engineering, SDE and backend engineering opportunities.</p>
      <div className="contact-links"><a href={`mailto:${profile.email}`} className="btn btn-primary">Email Me</a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-secondary">GitHub ↗</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary">LinkedIn ↗</a>
      </div>
    </div></section>
    <footer>© 2026 Shashi Raj · Software Engineer / Backend Engineer</footer>
  </div>;
}

createRoot(document.getElementById("root")).render(<App />);
