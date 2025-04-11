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
  isFullWidth?: boolean;
};

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
  isFullWidth = false,
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
    underlined && styles["underlined"]
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
      {text}
    </a>
  ) : (
    <div
      className={clsx(
        styles["button"],
        !disabled && animated && styles["animated"],
        isFullWidth && ["full-width"]
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
