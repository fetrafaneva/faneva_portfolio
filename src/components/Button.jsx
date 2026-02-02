/**
 * @copyright 2025 ShiningPrism (Fetra Faneva)
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import PropTypes from "prop-types";

/**
 * Primary Button
 */

const ButtonPrimary = ({
  href,
  target = "_self",
  label,
  icon,
  classes = "",
  onClick,
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        onClick={onClick}
        className={"btn btn-primary " + classes}
      >
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={"btn btn-primary " + classes}
    >
      {label}
      {icon && (
        <span className="material-symbols-rounded" aria-hidden="true">
          {icon}
        </span>
      )}
    </button>
  );
};

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
  onClick: PropTypes.func,
};

/**
 * Outline Button
 */

const ButtonOutline = ({ href, target = "_self", label, icon, classes }) => {
  if (href) {
    return (
      <a href={href} target={target} className={"btn btn-outline " + classes}>
        {label}

        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button className={"btn btn-outline " + classes}>
        {label}

        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};

ButtonOutline.PropTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

export { ButtonPrimary, ButtonOutline };
