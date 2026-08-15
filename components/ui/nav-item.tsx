import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  href: string;
  label: string;
  isActive?: boolean;
  hasDropdown?: boolean;
  className?: string;
}

export function NavItem({
  href,
  label,
  isActive,
  hasDropdown = false,
  className,
}: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "relative flex items-center gap-1.5 py-2 text-sm font-semibold transition-colors",
        isActive ? "text-primary" : "text-muted-foreground hover:text-primary",
        className,
      )}
    >
      <span>{label}</span>

      {hasDropdown && (
        <ChevronDown className="h-4 w-4 transition-transform duration-200" />
      )}

      {isActive && (
        <span className="absolute bottom-0 h-[3px] w-6 rounded-full bg-primary" />
      )}
    </Link>
  );
}
