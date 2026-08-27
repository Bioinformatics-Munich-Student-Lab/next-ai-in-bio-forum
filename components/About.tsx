import { EVENT } from '@/content/event';
import SectionEyebrow from './SectionEyebrow';

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20 md:py-24 border-t border-gray-200">
      <SectionEyebrow number="01" label="About" />

      <div className="grid md:grid-cols-3 gap-12 md:gap-16">
        <div className="md:col-span-1">
          <p className="text-base md:text-lg leading-relaxed text-gray-600">
            {EVENT.about}
          </p>
        </div>

        <div className="md:col-span-1">
          <h3 className="font-serif-display text-2xl md:text-3xl text-gray-900 mb-4">
            Who it's for
          </h3>
          <p className="text-sm md:text-base leading-relaxed text-gray-600">
            {EVENT.whoItsFoir}
          </p>
        </div>

        <div className="md:col-span-1">
          <h3 className="font-serif-display text-2xl md:text-3xl text-gray-900 mb-4">
            Our philosophy
          </h3>
          <p className="text-sm md:text-base leading-relaxed text-gray-600">
            {EVENT.philosophy}
          </p>
        </div>
      </div>
    </section>
  );
}
