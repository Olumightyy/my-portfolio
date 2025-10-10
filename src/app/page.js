import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import AIGallery from './components/AIGallery';  // ✅ Capital AI
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';
import EmailSidebar from './components/EmailSidebar';
import LoadingScreen from './components/LoadingScreen';
import BackToTop from './components/BackToTop';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Header />
      <SocialSidebar />
      <EmailSidebar />
      
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <AIGallery />  {/* ✅ Capital AI */}
        <Contact />
      </main>
      
      <Footer />
      <BackToTop />
    </>
  );
}