import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';
import EmailSidebar from './components/EmailSidebar';
import LoadingScreen from './components/LoadingScreen';
import BackToTop from './components/BackToTop';


export default function Home() {
  return (
    <>
      <Header />
      
      <main className="bg-slate-900">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
      <BackToTop />
      <EmailSidebar />
      <SocialSidebar />
      <LoadingScreen />
    </>
  );
}