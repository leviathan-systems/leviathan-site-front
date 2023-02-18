import Banner from '../components/Banner/Banner.js';
import Services from '../components/Services/Services.js';
import About from '../components/About/About.js';
import Contact from '../components/Contact/Contact.js';
import Footer from '../components/Footer/Footer.js';

import Animated_Logo from '../components/Animated_Logo/Animated_Logo.js';

import Logo_Planet from "../components/Logo_Planet/Logo_Planet";

import '../styles/pages/home.scss';

export default function Home() {
  return (
    <main className="home-page">
      {/* <Logo_Planet /> */}
      <Banner />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}