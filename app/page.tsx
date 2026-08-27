import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Topics from '@/components/Topics';
import Speakers from '@/components/Speakers';
import Agenda from '@/components/Agenda';
import Location from '@/components/Location';
import Hosts from '@/components/Hosts';
import CTABand from '@/components/CTABand';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Topics />
        <Speakers />
        <Agenda />
        <Location />
        <Hosts />
        <CTABand />
      </main>
      <Footer />
    </>
  );
}
