import useFadeIn from '../hooks/useFadeIn';

const skillCategories = [
  {
    title: 'Languages',
    icon: '{ }',
    color: '#00d4ff',
    skills: ['Java', 'JavaScript', 'C', 'C++', 'Python'],
  },
  {
    title: 'Backend & Frameworks',
    icon: '⚙️',
    color: '#a78bfa',
    skills: ['Spring Boot', 'Spring MVC', 'Spring Security', 'Node.js', 'Express.js'],
  },
  {
    title: 'Cloud & Infrastructure',
    icon: '☁️',
    color: '#38bdf8',
    skills: ['AWS EC2', 'AWS S3', 'AWS SQS', 'DynamoDB', 'CloudWatch'],
  },
  {
    title: 'Databases & Storage',
    icon: '🗄️',
    color: '#34d399',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'DynamoDB', 'Amazon S3'],
  },
  {
    title: 'DevOps & Tooling',
    icon: '🛠️',
    color: '#fb923c',
    skills: ['Git', 'GitLab', 'Postman', 'Kibana'],
  },
  {
    title: 'Architecture & Concepts',
    icon: '🏗️',
    color: '#f472b6',
    skills: ['RESTful APIs', 'Microservices', 'Async Messaging', 'Event-Driven', 'Real-Time Comms'],
  },
  {
    title: 'Core CS',
    icon: '🧠',
    color: '#facc15',
    skills: ['DSA', 'OOP', 'DBMS', 'Operating Systems'],
  },
];

const Skills = () => {
  const ref = useFadeIn();

  return (
    <section id="skills" className="c-space my-20">
      <div ref={ref} className="fade-in">
        <p className="head-text mb-12">Skills & Technologies</p>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="group relative border bg-black-200 rounded-2xl p-5 flex flex-col gap-4 transition-all duration-300 hover:scale-[1.02] overflow-hidden"
              style={{ borderColor: `${cat.color}22` }}>

              {/* background glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{ background: `radial-gradient(circle at top left, ${cat.color}0d, transparent 70%)` }}
              />

              {/* header */}
              <div className="flex items-center gap-3 relative">
                <span className="text-xl">{cat.icon}</span>
                <p className="text-sm font-semibold" style={{ color: cat.color }}>
                  {cat.title}
                </p>
              </div>

              {/* divider */}
              <div className="h-px w-full" style={{ background: `${cat.color}22` }} />

              {/* skill pills */}
              <div className="flex flex-wrap gap-2 relative">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1 rounded-full border text-white-600 hover:text-white transition-colors duration-200 cursor-default"
                    style={{ borderColor: `${cat.color}33`, background: `${cat.color}0d` }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
