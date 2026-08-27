import Link from 'next/link';
import { EVENT } from '@/content/event';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 mb-12">
          <div>
            <Link
              href="/"
              className="text-lg font-serif-display font-semibold text-gray-900 hover:text-gray-700"
            >
              Next AI in Bio 2026
            </Link>
            <p className="text-xs font-mono text-gray-500 tracking-widest mt-2">
              SEPTEMBER 12, 2026 • MUNICH
            </p>
          </div>

          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-gray-400 mb-4">
              Quick Links
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="#topics"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Topics
                </a>
              </li>
              <li>
                <a
                  href="#speakers"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Speakers
                </a>
              </li>
              <li>
                <a
                  href="#agenda"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Agenda
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Location
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs tracking-widest uppercase text-gray-400 mb-4">
              Connect
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://bmsl.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  BMSL Website
                </a>
              </li>
              <li>
                <a
                  href={EVENT.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Register on Luma
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <p className="text-xs text-gray-500 text-center font-mono tracking-widest">
            © {currentYear} Bioinformatics Munich Student Lab (BMSL). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
