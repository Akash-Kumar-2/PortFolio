import useFadeIn from '../hooks/useFadeIn';
import { education } from '../constants';

const Education = () => {
  const fadeRef = useFadeIn();

  return (
    <section className="c-space my-20" id="education">
      <div ref={fadeRef} className="fade-in">
        <p className="head-text mb-16">My Journey</p>

        {/* ── Desktop horizontal timeline ── */}
        <div className="hidden md:block relative">

          {/* horizontal line */}
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-black-300" />

          <div className="grid gap-0" style={{ gridTemplateColumns: `repeat(${education.length}, 1fr)` }}>
            {education.map((item, index) => (
              <div key={item.id} className="relative flex flex-col items-center">

                {/* dot on line */}
                <div className={`relative z-10 w-10 h-10 rounded-full border-2 flex items-center justify-center mb-6 transition-all duration-300
                  ${item.isCurrent
                    ? 'border-cyan-400 bg-cyan-400/10 shadow-lg shadow-cyan-400/20'
                    : 'border-white/30 bg-black-200'}`}>
                  {item.isCurrent ? (
                    <>
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-20" />
                      <span className="w-3 h-3 rounded-full bg-cyan-400" />
                    </>
                  ) : (
                    <span className="w-3 h-3 rounded-full bg-white/30" />
                  )}
                </div>

                {/* card — alternate above/below */}
                <div className={`w-full px-3 ${index % 2 === 0 ? '' : 'mt-0'}`}>
                  <div className={`border rounded-xl p-4 text-center transition-all duration-300 hover:border-white/20 hover:bg-black-300/50
                    ${item.isCurrent
                      ? 'border-cyan-400/30 bg-cyan-400/5'
                      : 'border-black-300 bg-black-200'}`}>

                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full mb-2 inline-block
                      ${item.isCurrent ? 'bg-cyan-400/10 text-cyan-400' : 'bg-black-300 text-white-600'}`}>
                      {item.year}
                    </span>

                    <p className="text-white font-semibold text-sm mt-2 leading-tight">{item.degree}</p>
                    <p className="text-white-600 text-xs mt-1">{item.institution}</p>
                    <p className="text-white/40 text-xs mt-0.5">{item.location}</p>

                    <span className={`text-xs mt-2 inline-block font-medium
                      ${item.isCurrent ? 'text-cyan-400' : 'text-white/40'}`}>
                      {item.grade}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* ── Mobile vertical timeline ── */}
        <div className="md:hidden relative flex flex-col gap-0">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-black-300" />

          {education.map((item) => (
            <div key={item.id} className="relative flex gap-6 pb-10 last:pb-0">

              {/* dot */}
              <div className="relative flex-shrink-0 flex items-start pt-1">
                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center z-10
                  ${item.isCurrent ? 'border-cyan-400 bg-cyan-400/10' : 'border-white/30 bg-black-200'}`}>
                  {item.isCurrent
                    ? <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                    : <span className="w-2.5 h-2.5 rounded-full bg-white/30" />}
                </div>
              </div>

              {/* content */}
              <div className={`grid-container flex-1 py-4 ${item.isCurrent ? 'border-cyan-400/30' : ''}`}>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full inline-block mb-2
                  ${item.isCurrent ? 'bg-cyan-400/10 text-cyan-400' : 'bg-black-300 text-white-600'}`}>
                  {item.year}
                </span>
                <p className="text-white font-semibold text-sm">{item.degree}</p>
                <p className="text-white-600 text-xs mt-1">{item.institution}</p>
                <p className="text-white/40 text-xs">{item.location}</p>
                <span className={`text-xs mt-1 inline-block font-medium
                  ${item.isCurrent ? 'text-cyan-400' : 'text-white/40'}`}>
                  {item.grade}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
