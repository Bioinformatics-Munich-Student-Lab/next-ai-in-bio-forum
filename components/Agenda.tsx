'use client';

import { AGENDA } from '@/content/agenda';
import SectionEyebrow from './SectionEyebrow';

const typeColors = {
  session: 'text-gray-900 bg-blue-50',
  break: 'text-gray-600 bg-gray-50',
  meal: 'text-gray-900 bg-amber-50',
  networking: 'text-gray-900 bg-green-50',
};

export default function Agenda() {
  return (
    <section id="agenda" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20 md:py-24 border-t border-gray-200">
      <SectionEyebrow number="04" label="Agenda" />

      <h2 className="font-serif-display text-4xl md:text-5xl leading-tight text-gray-900 mb-16">
        Full day schedule
      </h2>

      <div className="space-y-4">
        {AGENDA.map((item, idx) => (
          <div
            key={idx}
            className={`flex gap-6 md:gap-8 items-start p-4 md:p-6 border-l-4 border-l-gray-200 hover:border-l-gray-900 transition-colors ${
              typeColors[item.type]
            } rounded-sm`}
          >
            <div className="flex-shrink-0 font-mono font-semibold tracking-wide text-sm md:text-base w-20">
              {item.time}
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="font-serif-display text-lg md:text-xl text-gray-900 mb-1">
                {item.title}
              </h4>
              {item.timeRange && (
                <p className="font-mono text-xs md:text-sm text-gray-600 mb-2">
                  {item.timeRange}
                </p>
              )}
              {item.speaker && (
                <p className="font-mono text-xs md:text-sm text-gray-600">
                  {item.speaker}
                </p>
              )}
            </div>

            <div className="flex-shrink-0">
              <span className="inline-block px-2 py-1 text-xs font-mono tracking-widest uppercase rounded text-gray-500">
                {item.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
