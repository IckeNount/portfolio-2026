const Badge = ({ children, className = "" }) => (
  <span className={`inline-block px-3 py-1 text-xs rounded-full border border-accent/30 text-accent bg-accent/10 ${className}`}>
    {children}
  </span>
);
export default Badge;
