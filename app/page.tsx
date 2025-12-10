"use client";

import StackingCards from "./components/StackingCards";
import ProjectsShowcase from "./components/ProjectsShowcase";
import Testimonials from "./components/Testimonials";
import ContactSection from "./components/ContactSection";
import AboutSkills from "./components/AboutSkills";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

export default function Home() {
  return (
    <div className="hero-container">
      <div className="hero-section">
        <div className="hero-content">
          <div className="tagline-badge">
            <span className="badge-dot"></span>
            <span>PREMIUM IT SERVICES PARTNER</span>
          </div>

          <h1 className="hero-headline">
            Transform your business with
            <br />
            <span className="highlight">Digital Solutions</span>
          </h1>

          <p className="hero-description">
            We are WebiPro, a dedicated team of developers, designers, and AI
            specialists committed to turning your ideas into high-quality
            digital solutions.
          </p>

          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                const yOffset = 80;
                const y = element.getBoundingClientRect().top + window.scrollY - yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
            className="relative isolate overflow-hidden bg-gradient-to-r from-[#2b1b3a] via-[#442d5c] to-[#6b4ca8] text-white font-semibold md:font-bold px-7 py-4 rounded-full border border-white/10 backdrop-blur-md shadow-[0_12px_40px_rgba(43,27,58,0.55)] hover:shadow-[0_16px_48px_rgba(43,27,58,0.65)] hover:scale-[1.02] transition-all duration-300 inline-flex items-center justify-center gap-2 group">
            <span
              aria-hidden
              className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.32),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(79,70,229,0.25),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(27,17,36,0.6),transparent_42%)] blur-2xl opacity-90"
            />
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:translate-x-0.5 transition-transform"
            >
              <path
                d="M10 2C5.58 2 2 5.58 2 10C2 14.42 5.58 18 10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2ZM10 16C6.69 16 4 13.31 4 10C4 6.69 6.69 4 10 4C13.31 4 16 6.69 16 10C16 13.31 13.31 16 10 16Z"
                fill="white"
              />
              <path
                d="M10 6V10L13 11"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span>Book A Free Consultation</span>
          </button>

          <div className="hero-video-container">
            <video
              src="/heri_vid.mp4"
              className="hero-video"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
      <section id="about" className="about-section">
        <div className="about-inner">
          <div className="about-left">
            <p className="about-eyebrow">ABOUT US</p>
            <h2 className="about-title">
              Where Expertise Meets <span>Innovation</span>
            </h2>
            <p className="about-description">
              Our commitment to excellence is powered by cutting-edge technology
              and transformative strategies, making us the partner of choice for
              businesses worldwide. Discover our unwavering dedication to
              quality and the principles that fuel our success.
            </p>

            <AboutSkills />
          </div>

          <div className="about-right">
            <div className="about-media">
              <div className="about-media-glow" />
              <div className="about-card about-card-top">
                <img src="/about1.png" alt="Developer working" />
              </div>
              <div className="about-card about-card-bottom">
                <img src="/about2.png" alt="Innovation in progress" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <StackingCards />
      <ProjectsShowcase />
      <Testimonials />
      <ContactSection />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
