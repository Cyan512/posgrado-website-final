import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium text-sm transition-all duration-200 ease-out focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary:
    "bg-brand-800 text-white shadow-sm hover:bg-brand-700 active:bg-brand-900",
  secondary:
    "border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 hover:border-slate-300 active:bg-slate-100",
  ghost:
    "text-slate-600 hover:text-slate-900 hover:bg-slate-100 active:bg-slate-200",
  icon: "p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 active:bg-slate-200 rounded-lg",
};

const sizes = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-4",
  lg: "h-12 px-6 text-base",
  "icon-sm": "h-8 w-8",
  "icon-md": "h-10 w-10",
};

type ButtonVariant = keyof typeof variants;
type ButtonSize = keyof typeof sizes;

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & { href?: undefined };

type ButtonAsLink = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & { href: string };

type ButtonProps = (ButtonAsButton | ButtonAsLink) & {
  children: ReactNode;
  className?: string;
};

export default function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    children,
    className = "",
    ...rest
  } = props;

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in rest && rest.href) {
    const { href, ...anchorProps } = rest as ButtonAsLink;
    return (
      <Link
        href={href}
        className={classes}
        {...(anchorProps as Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "href">)}
      >
        {children}
      </Link>
    );
  }

  const buttonProps = rest as ButtonAsButton;
  return (
    <button
      type="button"
      className={classes}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
