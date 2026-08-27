import { EVENT } from '@/content/event';
import SectionEyebrow from './SectionEyebrow';

export default function Hosts() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20 md:py-24 border-t border-gray-200">
      <SectionEyebrow number="06" label="Hosts" />

      <div className="grid md:grid-cols-2 gap-12 md:gap-16">
        {EVENT.hosts.map((host) => (
          <a
            key={host.name}
            href={host.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-8 border border-gray-200 rounded-sm hover:border-gray-900 transition-colors"
          >
            <p className="font-mono text-xs tracking-widest uppercase text-gray-400 mb-2">
              {host.role}
            </p>
            <h3 className="font-serif-display text-2xl md:text-3xl text-gray-900 group-hover:text-blue-600 transition-colors">
              {host.name}
            </h3>
            <p className="text-sm text-gray-500 mt-2">Visit →</p>
          </a>
        ))}
      </div>
    </section>
  );
}
