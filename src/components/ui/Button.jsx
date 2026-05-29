const Button = ({ children, onClick, variant = "primary", className = "" }) => {
  const base = "px-6 py-2 rounded-full font-body font-medium transition-all duration-300";
  const variants = {
    primary: "bg-accent text-surface hover:scale-105",
    outline: "border border-accent text-accent hover:bg-accent hover:text-surface",
    ghost: "text-accent hover:bg-accent/10",
  };
  return <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>{children}</button>;
};
export default Button;
