import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavItemProps {
  href: string;
  label: string;
  isActive?: boolean;
  className?: string;
}

export function NavItem({ href, label, isActive, className }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "relative flex flex-col items-center py-2 text-sm font-semibold transition-colors",
        isActive ? "text-primary" : "text-muted-foreground hover:text-primary",
        className,
      )}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-0 h-[3px] w-6 rounded-full bg-primary" />
      )}
    </Link>
  );
}
