import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

// Décalage (en px) avant qu'une section soit considérée comme "active" au scroll.
// Correspond approximativement à la hauteur du header fixe.
const SCROLL_OFFSET = 200;

const navItems = [
  { label: "Home", link: "#home", className: "nav-link" },
  { label: "About", link: "#about", className: "nav-link" },
  { label: "Development", link: "#development", className: "nav-link" },
  { label: "Design", link: "#design", className: "nav-link" },
  { label: "Contact", link: "#contact", className: "nav-link md:hidden" },
];

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);
  const tickingRef = useRef(false);

  const moveActiveBox = (element) => {
    if (!element || !activeBox.current) return;

    activeBox.current.style.top = element.offsetTop + "px";
    activeBox.current.style.left = element.offsetLeft + "px";
    activeBox.current.style.width = element.offsetWidth + "px";
    activeBox.current.style.height = element.offsetHeight + "px";
  };

  const setActiveLink = (link) => {
    if (!link || link === lastActiveLink.current) return;

    lastActiveLink.current?.classList.remove("active");
    lastActiveLink.current?.removeAttribute("aria-current");

    link.classList.add("active");
    link.setAttribute("aria-current", "true");
    lastActiveLink.current = link;

    moveActiveBox(link);
  };

  const activeCurrentLink = (event) => {
    setActiveLink(event.currentTarget);
  };

  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");

    // Initialiser sur Home
    if (navLinks[0]) {
      setActiveLink(navLinks[0]);
    }

    const updateActiveLinkFromScroll = () => {
      let currentSection = null;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - SCROLL_OFFSET;

        // garde la dernière section dépassée
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute("id");
        }
      });

      if (!currentSection) return;

      const activeLink = [...navLinks].find(
        (link) => link.getAttribute("href") === `#${currentSection}`
      );

      setActiveLink(activeLink);
    };

    const handleScroll = () => {
      if (tickingRef.current) return;

      tickingRef.current = true;
      requestAnimationFrame(() => {
        updateActiveLinkFromScroll();
        tickingRef.current = false;
      });
    };

    const handleResize = () => {
      moveActiveBox(lastActiveLink.current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      {navItems.map(({ label, link, className }, key) => (
        <a
          href={link}
          key={key}
          className={className}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}

      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
