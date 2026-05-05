import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);

  const navItems = [
    { label: "Home", link: "#home", className: "nav-link" },
    { label: "About", link: "#about", className: "nav-link" },
    { label: "Development", link: "#development", className: "nav-link" },
    { label: "Design", link: "#design", className: "nav-link" },
    { label: "Contact", link: "#contact", className: "nav-link md:hidden" },
  ];

  const moveActiveBox = (element) => {
    if (!element || !activeBox.current) return;

    activeBox.current.style.top = element.offsetTop + "px";
    activeBox.current.style.left = element.offsetLeft + "px";
    activeBox.current.style.width = element.offsetWidth + "px";
    activeBox.current.style.height = element.offsetHeight + "px";
  };

  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove("active");

    event.target.classList.add("active");
    lastActiveLink.current = event.target;

    moveActiveBox(event.target);
  };

  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");

    // Initialiser sur Home
    if (navLinks[0]) {
      navLinks[0].classList.add("active");
      lastActiveLink.current = navLinks[0];
      moveActiveBox(navLinks[0]);
    }

    const handleScroll = () => {
      let currentSection = null;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 200;

        // garde la dernière section dépassée
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute("id");
        }
      });

      if (!currentSection) return;

      const activeLink = [...navLinks].find(
        (link) => link.getAttribute("href") === `#${currentSection}`
      );

      if (activeLink && activeLink !== lastActiveLink.current) {
        lastActiveLink.current?.classList.remove("active");

        activeLink.classList.add("active");
        lastActiveLink.current = activeLink;

        moveActiveBox(activeLink);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () =>
      moveActiveBox(lastActiveLink.current)
    );

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
