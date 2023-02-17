import Banner from '../components/Banner/Banner.js';
import About from '../components/About/About.js';
import Contact from '../components/Contact/Contact.js';

import '../styles/pages/home.scss';

export default function Home() {
  return (
    <main className="home-page">
      <Banner />
      <About />
      <Contact />
    </main>
  );
}