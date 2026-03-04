import React from "react";
import s from "./button.module.scss";
import { Link } from "react-router-dom"; // If you're using React Router

type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  onClick?: () => void;
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
  href?: string; // Add href prop for link functionality
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  variant = "secondary",
  className,
  style,
  children,
  type = "button",
  disabled,
  href,
}) => {
  const classNames = `${s.button} ${s[variant]} ${className || ""}`;

  if (href) {
    return (
      <a href={href} className={classNames} style={style}>
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={classNames}
      style={style}
    >
      {children}
    </button>
  );
};
