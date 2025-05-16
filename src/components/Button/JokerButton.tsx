import React from "react";
import styles from "./JokerButton.module.css";
import clsx from "clsx";

export enum ButtonType {
  CTA = "CTA",
  Link = "Link",
  Text = "Text",
  Primary = "Primary",
  Secondary = "Secondary",
}

export enum ButtonSize {
  Small = "Small",
  Normal = "Normal",
  Medium = "Medium",
  Large = "Large",
}

type ButtonProps = {
  type?: ButtonType;
  text: string;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  href?: string;
  icon?: string;
  disabled?: boolean;
  animated?: boolean;
  highlighted?: boolean;
  size?: ButtonSize;
  style?: React.CSSProperties;
  equal?: boolean;
  underlined?: boolean;
};


/**
 * JokerButton component renders a customizable button or link.
 *
 * @param {ButtonType} type - The style of the button (CTA, Link, Text, Primary, Secondary).
 * @param {string} text - The display text of the button.
 * @param {(e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void} [onClick] - Click handler function.
 * @param {string} [href] - URL to navigate to when rendering as a link.
 * @param {string} [icon] - Icon image source to display inside the button.
 * @param {boolean} [disabled=false] - If true, the button is disabled.
 * @param {boolean} [animated] - If true, apply animation styles.
 * @param {boolean} [highlighted] - If true, apply highlighted styles.
 * @param {ButtonSize} [size=ButtonSize.Normal] - The size of the button (Small, Normal, Medium, Large).
 * @param {React.CSSProperties} [style] - Custom inline styles.
 * @param {boolean} [equal] - If true, button will have equal width.
 * @param {boolean} [underlined] - If true and rendering as a link, apply underline style.
 */

const JokerButton: React.FC<ButtonProps> = ({
  type = ButtonType.CTA,
  text,
  onClick,
  href,
  icon,
  disabled = false,
  animated,
  highlighted,
  size = ButtonSize.Normal,
  style = {},
  equal = false,
  underlined = false,
  ...props
}) => {
  const getButtonStyle = (type: ButtonType) => {
    switch (type) {
      case ButtonType.Primary:
        return styles["primary"];
      case ButtonType.Secondary:
        return styles["secondary"];
      case ButtonType.Text:
        return styles["text"];
      case ButtonType.Link:
        return styles["link"];
      default:
        return styles["cta"];
    }
  };

  const getSize = (size: ButtonSize) => {
    switch (size) {
      case ButtonSize.Small:
        return styles["small"];
      case ButtonSize.Medium:
        return styles["medium"];
      case ButtonSize.Large:
        return styles["large"];
      default:
        return styles["normal"];
    }
  };

  const buttonClass = clsx(
    styles["button"],
    getButtonStyle(type),
    getSize(size),
    disabled && styles["disabled"],
    equal && styles["button-equal-width"],
    highlighted && styles["highlighted"],
    underlined && styles["underlined"],
  );

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    if (onClick) {
      onClick(e);
    } else if (href) {
      window.location.href = href;
    }
  };

  return type === ButtonType.Link ? (
    <a
      className={buttonClass}
      href={href}
      {...props}
      onClick={handleClick}
      aria-disabled={disabled}
      style={style}
    >
      {icon && <img src={icon} />} {text}
    </a>
  ) : (
    <div
      className={clsx(
        styles["button"],
        !disabled && animated && styles["animated"],
        equal && styles["button-equal-width"],
      )}
    >
      <button
        className={buttonClass}
        {...props}
        onClick={handleClick}
        disabled={disabled}
        aria-disabled={disabled}
        style={style}
      >
        {icon && <img src={icon} />}
        {text}
      </button>
    </div>
  );
};

export default JokerButton;
