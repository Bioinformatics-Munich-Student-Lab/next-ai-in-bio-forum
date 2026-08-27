'use client';

import { SPEAKERS } from '@/content/speakers';
import SectionEyebrow from './SectionEyebrow';

export default function Speakers() {
  const revealedSpeakers = SPEAKERS.filter((s) => s.status === 'revealed');
  const tbdSpeakers = SPEAKERS.filter((s) => s.status === 'tbd');

  return (
    <section id="speakers" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20 md:py-24 border-t border-gray-200">
      <SectionEyebrow number="03" label="Speakers" />

      <h2 className="font-serif-display text-4xl md:text-5xl leading-tight text-gray-900 mb-4">
        Meet the speakers
      </h2>

      <p className="text-gray-600 text-sm md:text-base mb-16 max-w-2xl">
        New speakers announced weekly. Check back for the full lineup.
      </p>

      {/* Revealed Speakers */}
      <div className="space-y-12 mb-20">
        {revealedSpeakers.map((speaker) => (
          <div
            key={speaker.id}
            className="grid md:grid-cols-3 gap-8 md:gap-12 pb-12 border-b border-gray-100 last:border-b-0"
          >
            {/* Photo placeholder */}
            <div className="md:col-span-1">
              <div className="w-full aspect-square bg-gray-100 rounded-sm flex items-center justify-center">
                {speaker.photoUrl ? (
                  <img
                    src={speaker.photoUrl}
                    alt={speaker.name}
                    className="w-full h-full object-cover rounded-sm"
                  />
                ) : (
                  <div className="text-gray-400 text-center">
                    <p className="text-xs font-mono tracking-widest">PHOTO</p>
                  </div>
                )}
              </div>
            </div>

            {/* Speaker Info */}
            <div className="md:col-span-2">
              <div className="mb-4">
                <p className="font-mono text-xs tracking-widest uppercase text-gray-400 mb-2">
                  {speaker.topic}
                </p>
                <h3 className="font-serif-display text-3xl md:text-4xl text-gray-900 mb-1">
                  {speaker.name}
                </h3>
                <p className="font-mono text-sm text-gray-600">{speaker.affiliation}</p>
              </div>

              <p className="text-base leading-relaxed text-gray-700 mb-6 max-w-2xl">
                {speaker.bio}
              </p>

              <div className="flex items-center gap-4">
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-900 text-xs font-mono tracking-widest rounded">
                  {speaker.talkTime}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* TBD Speakers */}
      {tbdSpeakers.length > 0 && (
        <div className="space-y-6">
          <p className="font-mono text-xs tracking-widest uppercase text-gray-400">
            Coming soon
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {tbdSpeakers.map((speaker) => (
              <div
                key={speaker.id}
                className="p-8 border border-gray-200 border-dashed rounded-sm"
              >
                <p className="font-mono text-xs tracking-widest uppercase text-gray-400 mb-3">
                  {speaker.topic}
                </p>
                <h4 className="font-serif-display text-2xl text-gray-400 mb-2">
                  Speaker TBD
                </h4>
                <p className="text-sm text-gray-500 mb-4">Revealed soon</p>
                <span className="inline-block px-3 py-1 bg-gray-50 text-gray-600 text-xs font-mono tracking-widest rounded border border-gray-200">
                  {speaker.talkTime}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
