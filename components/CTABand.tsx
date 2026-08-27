import { EVENT } from '@/content/event';

export default function CTABand() {
  return (
    <section className="w-full bg-gray-900 text-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center">
          <h2 className="font-serif-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 max-w-3xl mx-auto">
            {EVENT.tagline}
          </h2>

          <a
            href={EVENT.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-blue-500 text-white font-mono tracking-widest uppercase text-sm font-semibold rounded hover:bg-blue-600 transition-colors"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
}
