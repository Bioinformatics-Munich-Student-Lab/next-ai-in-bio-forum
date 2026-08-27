import { EVENT } from '@/content/event';
import SectionEyebrow from './SectionEyebrow';

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-24 md:py-32">
      <SectionEyebrow number="00" label="Forum" />

      <h1 className="font-serif-display text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] xl:text-[7.5rem] leading-[1.02] tracking-tight text-gray-900 mb-8 max-w-4xl">
        {EVENT.hook}
      </h1>

      <div className="mb-12 space-y-2">
        <p className="font-mono text-sm md:text-base tracking-wide text-gray-600">
          📅 {EVENT.dateFormatted}
        </p>
        <p className="font-mono text-sm md:text-base tracking-wide text-gray-600">
          🕘 {EVENT.timeStart} – {EVENT.timeEnd} {EVENT.timezone}
        </p>
        <p className="font-mono text-sm md:text-base tracking-wide text-gray-600">
          📍 {EVENT.venue}, Munich
        </p>
      </div>

      <a
        href={EVENT.registrationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-4 bg-blue-500 text-white font-mono tracking-widest uppercase text-sm font-semibold rounded hover:bg-blue-600 transition-colors"
      >
        Register Now
      </a>
    </section>
  );
}
