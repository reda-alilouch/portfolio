"use client";
const Button = ({ className = "", onClick, children, ...props }) => {
  return (
    <button onClick={onClick} className={`${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;