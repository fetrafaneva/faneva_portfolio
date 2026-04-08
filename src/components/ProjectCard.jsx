/**
 * @copyright 2025 ShiningPrism (Fetra Faneva)
 * @license Apache-2.0
 */

import PropTypes from "prop-types";

const ProjectCard = ({
  imgSrc,
  title,
  tags,
  projectLink,
  classes,
  category,
  isNew,
}) => {
  return (
    <div
      className={
        "group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-all duration-300 hover:-translate-y-1 " +
        (classes || "")
      }
    >
      {/* Image */}
      <figure className="relative overflow-hidden aspect-video">
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badge "New" */}
        {isNew && (
          <span className="absolute top-3 left-3 text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-950/90 text-emerald-300 border border-emerald-800 backdrop-blur-sm">
            New
          </span>
        )}
      </figure>

      {/* Body */}
      <div className="p-5">
        {/* Category label */}
        {category && (
          <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-1">
            {category}
          </p>
        )}

        {/* Title + Arrow */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <h3 className="text-base font-semibold text-zinc-100 leading-snug">
            {title}
          </h3>

          <div className="w-8 h-8 rounded-lg grid place-items-center bg-emerald-600 hover:bg-emerald-500 text-white shrink-0 transition-colors duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800 mb-4" />

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2">
          {tags.map((label, key) => (
            <span
              key={key}
              className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700 hover:border-zinc-500 hover:text-zinc-300 transition-colors duration-150"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Clickable overlay */}
      {projectLink && (
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0"
          aria-label={`Voir le projet ${title}`}
        />
      )}
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string,
  category: PropTypes.string,
  isNew: PropTypes.bool,
};

ProjectCard.defaultProps = {
  isNew: false,
};

export default ProjectCard;
