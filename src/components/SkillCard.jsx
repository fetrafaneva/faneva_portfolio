/**
 * @copyright 2025 ShiningPrism (Fetra Faneva)
 * @license Apache-2.0
 */

import PropTypes from "prop-types";

const SkillCard = ({ imgSrc, label, desc, classes, level }) => {
  const levelConfig = {
    beginner: {
      label: "Beginner",
      color: "text-amber-400",
      bg: "bg-amber-400/10",
      border: "border-amber-400/20",
    },
    intermediate: {
      label: "Intermediate",
      color: "text-sky-400",
      bg: "bg-sky-400/10",
      border: "border-sky-400/20",
    },
    advanced: {
      label: "Advanced",
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
      border: "border-emerald-400/20",
    },
  };

  const lvl = level ? levelConfig[level] : null;

  return (
    <div
      className={
        "group relative flex items-center gap-4 p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 hover:-translate-y-0.5 transition-all duration-300 " +
        (classes || "")
      }
    >
      {/* Icon */}
      <figure className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-zinc-800 group-hover:bg-zinc-700 transition-colors duration-300 flex items-center justify-center p-2.5">
        <img
          src={imgSrc}
          width={32}
          height={32}
          alt={label}
          className="w-full h-full object-contain"
        />
      </figure>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <h3 className="text-sm font-semibold text-zinc-100 truncate">
            {label}
          </h3>

          {/* Level badge */}
          {lvl && (
            <span
              className={`text-[10px] font-medium px-2 py-0.5 rounded-full border shrink-0 ${lvl.color} ${lvl.bg} ${lvl.border}`}
            >
              {lvl.label}
            </span>
          )}
        </div>

        <p className="text-xs text-zinc-500 truncate">{desc}</p>
      </div>

      {/* Subtle right arrow on hover */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0"
      >
        <path d="M9 18l6-6-6-6" />
      </svg>
    </div>
  );
};

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string,
  level: PropTypes.oneOf(["beginner", "intermediate", "advanced"]),
};

export default SkillCard;
