import { ExternalLink, Eye, Play, LucideIcon } from "lucide-react";

type ResourceActionProps = {
  icon: LucideIcon;
  title: string;
  href?: string;
  action?: "play" | "view" | "external";
  onClick?: () => void;
};

export function ResourceAction({
  icon: Icon,
  title,
  href,
  action = "view",
  onClick,
}: ResourceActionProps) {
  const ActionIcon =
    action === "play" ? Play : action === "external" ? ExternalLink : Eye;

  const actionLabel =
    action === "play" ? "پخش" : action === "external" ? "مطالعه" : "مشاهده";

  const content = (
    <div className="group flex w-full cursor-pointer items-center gap-4 border-b border-slate-100 py-3 transition-colors hover:border-primary/30">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/5 text-primary transition-all group-hover:scale-105 group-hover:bg-primary/10">
        <Icon className="h-5 w-5" />
      </div>

      <span className="flex-grow text-right text-sm font-medium text-slate-700 transition-colors group-hover:text-primary">
        {title}
      </span>

      <div className="flex shrink-0 items-center gap-1.5 text-xs font-medium text-slate-600 transition-all group-hover:-translate-x-0.5 group-hover:text-primary">
        <span>{actionLabel}</span>
        <ActionIcon className="h-4 w-4" />
      </div>
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
      onClick={onClick}
      className="block w-full text-right focus:outline-none"
    >
      {content}
    </button>
  );
}
