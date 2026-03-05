const impacts = [
  {
    number: '01',
    title: 'Fortalecer a comunidade de desenvolvedores da região',
    lineColor: 'bg-blue-500/20',
  },
  {
    number: '02',
    title: 'Fomentar o ecossistema tech da Baixada Santista',
    lineColor: 'bg-amber-500/20',
  },
  {
    number: '03',
    title: 'Impulsionar a economia local com o desenvolvimento de software',
    lineColor: 'bg-rose-500/20',
  },
];

const stats = [
  { value: '+20', label: 'Cidades impactadas' },
  { value: '+1,800', label: 'Seguidores nas nossas redes' },
  { value: '+40', label: 'Eventos realizados' },
];

export function ImpactSection() {
  return (
    <section id="impactos" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(248,250,252,1),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_100%,rgba(251,191,36,0.06),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_20%_80%,rgba(59,130,246,0.05),transparent)]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-14 md:mb-18">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-gray-400 mb-3">
            Nosso impacto
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Impactos
          </h2>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5">
          <div className="md:col-span-3 md:row-span-2 relative rounded-3xl p-8 lg:p-10 bg-white/80 backdrop-blur-sm border border-gray-200/80 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5 hover:border-blue-200/50 group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex flex-col h-full min-h-[220px]">
              <span
                aria-hidden
                className="absolute top-6 right-6 text-[5rem] md:text-[6rem] font-bold text-gray-100/80 leading-none select-none z-0 pointer-events-none"
              >
                01
              </span>
              <div className="relative z-10">
                <div
                  className={`h-0.5 w-8 ${impacts[0].lineColor} mb-6 rounded-full`}
                />
                <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-400 mb-3">
                  Impacto 01
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug max-w-sm">
                  {impacts[0].title}
                </h3>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 relative rounded-3xl p-6 lg:p-8 bg-white/80 backdrop-blur-sm border border-gray-200/80 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5 hover:border-amber-200/50 group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <span
                aria-hidden
                className="absolute top-5 right-5 text-5xl font-bold text-gray-100/80 leading-none select-none z-0 pointer-events-none"
              >
                02
              </span>
              <div className="relative z-10">
                <div
                  className={`h-0.5 w-6 ${impacts[1].lineColor} mb-4 rounded-full`}
                />
                <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-400 mb-2 block">
                  Impacto 02
                </span>
                <h3 className="text-base font-bold text-gray-900 leading-snug">
                  {impacts[1].title}
                </h3>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 relative rounded-3xl p-6 lg:p-8 bg-white/80 backdrop-blur-sm border border-gray-200/80 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-500/5 hover:border-rose-200/50 group">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <span
                aria-hidden
                className="absolute top-5 right-5 text-5xl font-bold text-gray-100/80 leading-none select-none z-0 pointer-events-none"
              >
                03
              </span>
              <div className="relative z-10">
                <div
                  className={`h-0.5 w-6 ${impacts[2].lineColor} mb-4 rounded-full`}
                />
                <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-400 mb-2 block">
                  Impacto 03
                </span>
                <h3 className="text-base font-bold text-gray-900 leading-snug">
                  {impacts[2].title}
                </h3>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 rounded-3xl bg-gray-900 text-white p-8 lg:p-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
              {stats.map(stat => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="text-4xl md:text-5xl font-bold tracking-tight tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 font-medium mt-1.5 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
