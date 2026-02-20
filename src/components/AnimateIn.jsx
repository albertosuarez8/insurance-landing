import { useInView } from "../hooks/useInView";

export function AnimateIn({
  children,
  className = "",
  as: Component = "div",
  delay = 0,
  style: animationStyle = "fade-in-up",
}) {
  const [ref, isInView] = useInView();

  const animationClass = animationStyle === "fade-in" ? "animate-fade-in" : "animate-fade-in-up";

  return (
    <Component
      ref={ref}
      className={`${isInView ? `${animationClass} opacity-100` : "opacity-0"} ${className}`}
      style={isInView && delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Component>
  );
}
