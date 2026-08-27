'use client';

import SectionEyebrow from './SectionEyebrow';

const topics = [
  {
    number: '01',
    title: 'Invasive Neural Decoding & Connectomics',
    description: 'How machine learning decodes brain signals to enable personalized neuromodulation.',
  },
  {
    number: '02',
    title: 'Brain-Computer Interfaces',
    description: 'Building real-time BCI systems: from EEG to invasive recording and rehabilitation.',
  },
  {
    number: '03',
    title: 'AI Co-scientists in Practice',
    description: 'Deploying AI as an active research partner in the lab, not just a tool.',
  },
  {
    number: '04',
    title: 'Clinical Trial Outcome Prediction',
    description: 'Predicting patient outcomes in real clinical trials with modern AI methods.',
  },
];

export default function Topics() {
  return (
    <section id="topics" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20 md:py-24 border-t border-gray-200">
      <SectionEyebrow number="02" label="Four Topics" />

      <h2 className="font-serif-display text-4xl md:text-5xl leading-tight text-gray-900 mb-16">
        The frontier awaits
      </h2>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {topics.map((topic) => (
          <a
            key={topic.number}
            href={`#speakers`}
            className="group p-8 border border-gray-200 hover:border-gray-900 transition-colors rounded-sm"
          >
            <p className="font-mono text-sm tracking-widest uppercase text-gray-400 mb-3">
              Topic {topic.number}
            </p>
            <h3 className="font-serif-display text-2xl md:text-3xl text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
              {topic.title}
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {topic.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
