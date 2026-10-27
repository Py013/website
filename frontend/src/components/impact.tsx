import { ImpactMap } from '@/components/impact-map';

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
        <header className="sr-only">
          <h2>Impactos</h2>
        </header>

        <div className="space-y-5">
          <ImpactMap />

          <div className="rounded-3xl bg-gray-900 text-white p-8 lg:p-10">
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
