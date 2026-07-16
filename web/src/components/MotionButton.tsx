import type { ReactNode, MouseEventHandler } from "react";
import { motion } from "framer-motion";
import { springHover } from "../motion";

// A small reusable wrapper so every "button" on the site (whether it's
// really an <a> link or a <button type="submit">) gets the same springy
// hover/tap feel, instead of copy-pasting the same Framer Motion props
// into Hero, CtaBand, Roadmap, and Contact separately.
interface MotionButtonProps {
  href?: string;
  type?: "button" | "submit";
  className: string;
  children: ReactNode;
  target?: string;
  rel?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler;
}

export default function MotionButton({
  href,
  type = "button",
  className,
  children,
  target,
  rel,
  disabled,
  onClick,
}: MotionButtonProps) {
  const hoverTapProps = {
    whileHover: disabled ? undefined : { y: -2, scale: 1.03 },
    whileTap: disabled ? undefined : { scale: 0.97 },
    transition: springHover,
  };

  if (href) {
    return (
      <motion.a href={href} className={className} target={target} rel={rel} onClick={onClick} {...hoverTapProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} className={className} disabled={disabled} onClick={onClick} {...hoverTapProps}>
      {children}
    </motion.button>
  );
}
