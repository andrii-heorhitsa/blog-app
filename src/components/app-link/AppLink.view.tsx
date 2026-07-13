import Link from "next/link";
import { UrlObject } from "url";

type LinkProps = {
  children: React.ReactNode;
  href: string | UrlObject;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
};

export function AppLink({
  children,
  href,
  disabled,
  className = "",
  ariaLabel,
}: LinkProps) {
  return disabled === true ? (
    <span>{children}</span>
  ) : (
    <Link href={href} className={className} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
