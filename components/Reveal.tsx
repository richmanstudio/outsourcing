import type { PropsWithChildren } from "react";

type RevealProps = PropsWithChildren<{
  className?: string;
  delay?: number;
}>;

/* Content must remain visible without JS and with reduced motion enabled. */
export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  return (
    <div
      className={"reveal is-visible " + className}
      style={{ transitionDelay: Math.max(0, Math.min(delay, 240)) + "ms" }}
    >
      {children}
    </div>
  );
}
