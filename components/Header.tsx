import Link from 'next/link';
import { EVENT } from '@/content/event';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1">
            <Link
              href="/"
              className="text-lg font-serif-display font-semibold text-gray-900 hover:text-gray-700 transition-colors"
            >
              Next AI in Bio{' '}
              <span className="hidden sm:inline">2026</span>
            </Link>
            <div className="text-xs font-mono text-gray-500 tracking-widest mt-1">
              by{' '}
              <a
                href="https://bmsl.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 transition-colors"
              >
                BMSL
              </a>
            </div>
          </div>

          <nav className="hidden lg:flex gap-8">
            <a
              href="#topics"
              className="font-mono text-sm tracking-[0.10em] uppercase py-1.5 border-b transition-colors text-gray-600 hover:text-gray-900 border-transparent hover:border-gray-900"
            >
              Topics
            </a>
            <a
              href="#speakers"
              className="font-mono text-sm tracking-[0.10em] uppercase py-1.5 border-b transition-colors text-gray-600 hover:text-gray-900 border-transparent hover:border-gray-900"
            >
              Speakers
            </a>
            <a
              href="#agenda"
              className="font-mono text-sm tracking-[0.10em] uppercase py-1.5 border-b transition-colors text-gray-600 hover:text-gray-900 border-transparent hover:border-gray-900"
            >
              Agenda
            </a>
            <a
              href="#location"
              className="font-mono text-sm tracking-[0.10em] uppercase py-1.5 border-b transition-colors text-gray-600 hover:text-gray-900 border-transparent hover:border-gray-900"
            >
              Location
            </a>
          </nav>

          <a
            href={EVENT.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 bg-blue-500 text-white text-sm font-mono tracking-widest uppercase rounded hover:bg-blue-600 transition-colors"
          >
            Register
          </a>
        </div>
      </div>
    </header>
  );
}
