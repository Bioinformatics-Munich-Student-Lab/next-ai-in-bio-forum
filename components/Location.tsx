import { EVENT } from '@/content/event';
import SectionEyebrow from './SectionEyebrow';

export default function Location() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(EVENT.venue)}&query_place_id=${EVENT.mapPlaceId}`;

  return (
    <section id="location" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20 md:py-24 border-t border-gray-200">
      <SectionEyebrow number="05" label="Location" />

      <div className="grid md:grid-cols-2 gap-12 md:gap-16">
        <div>
          <h2 className="font-serif-display text-4xl md:text-5xl leading-tight text-gray-900 mb-8">
            {EVENT.venue}
          </h2>

          <div className="space-y-4 mb-8">
            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-gray-400 mb-2">
                Address
              </p>
              <p className="text-base md:text-lg text-gray-900">{EVENT.address}</p>
            </div>

            <div>
              <p className="font-mono text-xs tracking-widest uppercase text-gray-400 mb-2">
                Date & Time
              </p>
              <p className="text-base md:text-lg text-gray-900">
                {EVENT.dateFormatted}
              </p>
              <p className="text-base md:text-lg text-gray-900">
                {EVENT.timeStart} – {EVENT.timeEnd} {EVENT.timezone}
              </p>
            </div>
          </div>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gray-900 text-white font-mono tracking-widest uppercase text-sm rounded hover:bg-gray-800 transition-colors"
          >
            Get Directions
          </a>
        </div>

        <div>
          <div className="w-full h-80 bg-gray-100 rounded-sm overflow-hidden border border-gray-200">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDmAtJiYb1xJaHegKrFvqP73bnVcXG2Vvw&q=${encodeURIComponent(EVENT.mapPlaceId)}`}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              Open in Google Maps →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
