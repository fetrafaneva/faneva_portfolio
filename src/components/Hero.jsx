/**
 * @copyright 2025 ShiningPrism (Fetra Faneva)
 * @license Apache-2.0
 */

import { useRef } from "react";
import { ButtonPrimary } from "./Button";

/* ── 3D Hover wrapper ───────────────────────────────────────────────── */
const Card3D = ({ children }) => {
  const cardRef = useRef(null);
  const layersRef = useRef([]);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;

    const rotateX = ((y - cy) / cy) * -12;
    const rotateY = ((x - cx) / cx) * 12;

    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04,1.04,1.04)`;

    layersRef.current.forEach((layer, i) => {
      if (!layer) return;
      const depth = (i + 1) * 3;
      const moveX = ((x - cx) / cx) * depth;
      const moveY = ((y - cy) / cy) * depth;
      layer.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`;
    layersRef.current.forEach((layer) => {
      if (layer) layer.style.transform = `translate(0px, 0px)`;
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: "transform 0.1s ease-out",
        transformStyle: "preserve-3d",
      }}
      className="relative w-full max-w-[480px] ml-auto cursor-pointer"
    >
      {/* 8 parallax layers */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (layersRef.current[i] = el)}
          style={{
            position: "absolute",
            inset: 0,
            transition: "transform 0.08s ease-out",
            pointerEvents: "none",
            zIndex: i + 1,
          }}
        />
      ))}

      {/* Actual content */}
      <div style={{ position: "relative", zIndex: 10 }}>{children}</div>
    </div>
  );
};

/* ── Hero ───────────────────────────────────────────────────────────── */
const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/images/CV.pdf";
    link.download = "fetrafaneva_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="overflow-hidden relative bg-primary pt-28 lg:pt-36 lg:pb-10 mb-0"
    >
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        {/* ── Left ── */}
        <div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
              </span>
              Disponible pour un travail
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            RASAMIMANANA Fetra Faneva
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary
              label="Download CV"
              icon="download"
              onClick={handleDownloadCV}
            />
          </div>
        </div>

        {/* ── Right — 3D image ── */}
        <div className="hidden lg:flex justify-end">
          <Card3D>
            <a
              href="https://github.com/fetrafaneva"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Voir mon GitHub"
            >
              <figure className="w-full bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
                <img
                  src="/images/hero-banner.png"
                  width={656}
                  height={800}
                  alt="Fetra Faneva"
                  className="w-full"
                />
              </figure>
            </a>
          </Card3D>
        </div>
      </div>
    </section>
  );
};

export default Hero;
