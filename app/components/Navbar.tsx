"use client";

import { useEffect, useState, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    // Only intercept clicks on the landing page; on other routes we use normal links
    if (pathname !== "/") return;

    event.preventDefault();

    const element = document.getElementById(targetId);
    if (!element) return;

    const yOffset = 80; // adjust if navbar height changes
    const y = element.getBoundingClientRect().top + window.scrollY - yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-content">
        <Link href="/" className="logo-container">
          <div className="sphere-wrapper">
            <div className="logo-sphere">
              <div className="sphere-inner"></div>
              <div className="sphere-ring ring1"></div>
              <div className="sphere-ring ring2"></div>
              <div className="sphere-ring ring3"></div>
              <img
                src="/logo.png"
                alt="CoderAxo Logo"
                className="logo-image"
              />
            </div>
          </div>
          <span className="logo-text">WebiPro</span>
        </Link>

        <div className={`nav-links ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <a
            href={pathname === "/" ? "#about" : "/#about"}
            data-text="About us"
            onClick={(event) => handleNavClick(event, "about")}
          >
            <span>About us</span>
          </a>
          <a
            href={pathname === "/" ? "#services" : "/#services"}
            data-text="Services"
            onClick={(event) => handleNavClick(event, "services")}
          >
            <span>Services</span>
          </a>
          <a
            href={pathname === "/" ? "#projects" : "/#projects"}
            data-text="Projects"
            onClick={(event) => handleNavClick(event, "projects")}
          >
            <span>Projects</span>
          </a>
          <a
            href={pathname === "/" ? "#testimonials" : "/#testimonials"}
            data-text="Testimonials"
            onClick={(event) => handleNavClick(event, "testimonials")}
          >
            <span>Testimonials</span>
          </a>
          <a
            href={pathname === "/" ? "#contact" : "/#contact"}
            data-text="Contact us"
            onClick={(event) => handleNavClick(event, "contact")}
          >
            <span>Contact us</span>
          </a>
        </div>

        <div className="nav-actions">
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                const yOffset = 80;
                const y = element.getBoundingClientRect().top + window.scrollY - yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
              }
            }}
            className="relative isolate overflow-hidden bg-gradient-to-r from-[#2b1b3a] via-[#442d5c] to-[#6b4ca8] text-white font-semibold px-6 py-3 rounded-full border border-white/10 backdrop-blur-md shadow-[0_12px_40px_rgba(43,27,58,0.55)] hover:shadow-[0_16px_48px_rgba(43,27,58,0.65)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span
              aria-hidden
              className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.32),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(79,70,229,0.25),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(27,17,36,0.6),transparent_42%)] blur-2xl opacity-90"
            />
            <span>Get Started</span>
          </button>
          <button
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
