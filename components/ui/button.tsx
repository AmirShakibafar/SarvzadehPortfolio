import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center whitespace-nowrap",
    "font-medium",
    "transition-all duration-300 ease-out",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-ring",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
    "select-none",
    "cursor-pointer", // Added to force the click indicator
  ].join(" "),
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground   hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground   hover:bg-destructive/90",
        outline:
          "border border-input bg-background   hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground   hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",

        pillPrimary: [
          "rounded-full",
          "bg-gradient-to-b from-primary/90 to-primary",
          "text-primary-foreground",
          "border border-white/10",
          "  ",
          "hover:from-primary hover:to-primary/90",
          "  ",
          "active:scale-[0.98]",
        ].join(" "),

        pillSecondary: [
          "rounded-full",
          "bg-white/10",
          "  ",
          "border border-white/20",
          "text-primary",
          "  ",
          // Updated hover states for visibility on light backgrounds
          "hover:bg-primary/10",
          "hover:border-primary/20",
          "  ",
          "active:scale-[0.98]",
        ].join(" "),
      },

      size: {
        default: "h-9 rounded-md px-4 py-2 text-sm",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "size-9 rounded-md",
        pill: "h-12 rounded-full px-6 text-base font-semibold",
        pillSm: "h-9 rounded-full px-5 text-sm font-medium",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
