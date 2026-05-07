import useFadeIn from '../hooks/useFadeIn';
import { experiences } from '../constants';

const Experience = () => {
  const fadeRef = useFadeIn();
  const exp = experiences[0];

  return (
    <section className="c-space my-20" id="experience">
      <div ref={fadeRef} className="fade-in">
        <p className="head-text mb-12">Experience</p>

        <div className="grid-container">
          {/* header */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="w-16 h-16 rounded-2xl border border-black-300 bg-black-300 flex items-center justify-center overflow-hidden flex-shrink-0">
              <img src={exp.logo} alt={exp.company} className="w-12 h-12 object-contain rounded-xl" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <p className="text-white font-bold text-xl">{exp.role}</p>
                  <p className="text-white-600 text-sm mt-0.5">{exp.company}</p>
                </div>
                <span className="bg-green-500/10 text-green-400 border border-green-500/20 text-xs font-medium px-3 py-1 rounded-full w-fit">
                  🟢 {exp.duration}
                </span>
              </div>
            </div>
          </div>

          {/* divider */}
          <div className="h-px bg-black-300 my-2" />

          {/* points */}
          <ul className="flex flex-col gap-3">
            {exp.points.map((point, i) => (
              <li key={i} className="flex gap-3 text-white-600 text-sm leading-relaxed">
                <span className="text-cyan-400 mt-1 flex-shrink-0">▹</span>
                {point}
              </li>
            ))}
          </ul>

          {/* tech tags */}
          <div className="flex flex-wrap gap-2 mt-2">
            {['Java', 'Spring Boot', 'AWS', 'PostgreSQL', 'Microservices', 'REST APIs'].map((tech) => (
              <span key={tech} className="text-xs px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-400">
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
