import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
type ButtonSize = "sm" | "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-neutral-900 text-white shadow-md shadow-neutral-900/20 hover:bg-neutral-800 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-amber-500 text-black shadow-md shadow-amber-500/25 hover:bg-amber-400 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "bg-white/10 text-white border border-white/20 shadow-sm hover:bg-white/20 hover:border-white/40 hover:-translate-y-0.5 active:translate-y-0",
  ghost:
    "bg-neutral-100 text-black shadow-sm hover:bg-neutral-200 hover:shadow-md active:scale-[0.98]",
  whatsapp:
    "bg-[#25D366] text-white shadow-md shadow-green-500/25 hover:bg-[#20bd5a] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-[10px] gap-1.5",
  md: "px-6 py-3 text-xs gap-2",
  lg: "px-8 py-4 text-sm gap-2.5",
};

function buttonClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string
) {
  return [
    "inline-flex items-center justify-center font-black uppercase tracking-wider",
    "rounded-xl transition-all duration-200 ease-out motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    variantStyles[variant],
    sizeStyles[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  icon,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={buttonClasses(variant, size, className)}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  );
}

interface LinkButtonProps {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  target?: string;
  rel?: string;
}

export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  children,
  className,
  icon,
  target,
  rel,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={buttonClasses(variant, size, className)}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </Link>
  );
}

interface ExternalButtonProps {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export function ExternalButton({
  href,
  variant = "primary",
  size = "md",
  children,
  className,
  icon,
}: ExternalButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClasses(variant, size, className)}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </a>
  );
}
