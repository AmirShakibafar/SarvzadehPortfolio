import { cn } from "@/lib/utils";
import { ArrowLeft, ExternalLink, LucideIcon } from "lucide-react";

export function ResourceAction({
  icon: Icon,
  title,
  href,
}: {
  icon: LucideIcon;
  title: string;
  href?: string;
}) {
  const ActionIcon = href ? ExternalLink : ArrowLeft;

  const content = (
    <div className="group flex items-center gap-4 py-3 cursor-pointer border-b border-slate-100 hover:border-primary/30 transition-colors w-full md:max-w-md">
      <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary/10 group-hover:scale-105 transition-all shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <span className="text-sm font-medium text-slate-700 group-hover:text-primary transition-colors flex-grow text-right">
        {title}
      </span>
      <ActionIcon
        className={cn(
          "w-4 h-4 text-primary opacity-0 transition-all shrink-0",
          href
            ? "group-hover:opacity-100"
            : "-translate-x-2 group-hover:opacity-100 group-hover:translate-x-0",
        )}
      />
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="block w-full">
        {content}
      </a>
    );
  }
  return (
    <button
      type="button"
      className="block w-full text-right focus:outline-none"
    >
      {content}
    </button>
  );
}
