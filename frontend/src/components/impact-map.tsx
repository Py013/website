'use client';

import { Map, MapGeoJSON } from '@/components/ui/map';

const BAIXADA_CENTER: [number, number] = [-46.4, -23.98];

const impacts = [
  'Fortalecendo a comunidade de desenvolvedores da região',
  'Fomentando o ecossistema tech da Baixada Santista',
  'Impulsionando a economia local com o desenvolvimento de software',
];

export function ImpactMap() {
  return (
    <div className="relative h-[420px] overflow-hidden rounded-3xl border border-gray-200/80 bg-white sm:h-[520px] lg:h-[600px]">
      <Map
        theme="light"
        center={BAIXADA_CENTER}
        zoom={9.6}
        interactive={false}
        attributionControl={false}
        className="h-full w-full rounded-none"
      >
        <MapGeoJSON
          data="/geo/baixada-santista.json?v=2"
          fillPaint={{
            'fill-color': [
              'interpolate',
              ['linear'],
              ['get', 'weight'],
              0,
              '#ffffff',
              1,
              '#FFD43B',
              3,
              '#4B8BBE',
              6,
              '#3776AB',
              11,
              '#2B5B84',
            ],
            'fill-opacity': [
              'interpolate',
              ['linear'],
              ['get', 'weight'],
              0,
              0,
              1,
              0.42,
              3,
              0.45,
              6,
              0.52,
              11,
              0.62,
            ],
          }}
          linePaint={{
            'line-color': [
              'interpolate',
              ['linear'],
              ['get', 'weight'],
              0,
              '#ffffff',
              1,
              '#E2B93A',
              6,
              '#3776AB',
              11,
              '#1E4A6E',
            ],
            'line-width': [
              'interpolate',
              ['linear'],
              ['get', 'weight'],
              0,
              0,
              1,
              6,
              11,
              12,
            ],
            'line-blur': [
              'interpolate',
              ['linear'],
              ['get', 'weight'],
              0,
              0,
              1,
              4,
              11,
              8,
            ],
            'line-opacity': [
              'interpolate',
              ['linear'],
              ['get', 'weight'],
              0,
              0,
              1,
              0.45,
              11,
              0.7,
            ],
          }}
        />
      </Map>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/75 to-transparent sm:via-white/55 lg:w-[58%]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-white/10" />

      <div className="pointer-events-none absolute inset-0 flex flex-col justify-end p-6 sm:justify-center sm:p-10 lg:p-14">
        <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-gray-400">
          Impactos
        </p>
        <h3 className="mt-3 max-w-lg text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
          {impacts[0]}
        </h3>
        <ul className="mt-6 max-w-md space-y-3">
          {impacts.slice(1).map(text => (
            <li
              key={text}
              className="text-sm leading-relaxed text-gray-600 sm:text-base"
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
