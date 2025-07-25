"use client";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
}

const Button = ({ className = "", onClick, children, ...props }: ButtonProps) => {
  return (
    <button onClick={onClick} className={`${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;