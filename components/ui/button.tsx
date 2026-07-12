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
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",

        pillPrimary: [
          "rounded-full",
          "bg-gradient-to-b from-primary/90 to-primary",
          "text-primary-foreground",
          "border border-white/10",
          // Refined inset shadow for the top gloss edge, paired with a soft colored drop shadow
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_4px_14px_color-mix(in_oklab,var(--color-primary)_30%,transparent)]",
          "hover:from-primary hover:to-primary/90",
          "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_6px_20px_color-mix(in_oklab,var(--color-primary)_40%,transparent)]",
          "active:scale-[0.98]",
        ].join(" "),

        pillSecondary: [
          "rounded-full",
          "bg-white/10",
          "backdrop-blur-md",
          "border border-white/20",
          "text-primary",
          // Clean white inset shadow to define the glass rim without heavy borders
          "shadow-[0_4px_14px_rgba(0,0,0,0.03),inset_0_1px_0_rgba(255,255,255,0.4)]",
          "hover:bg-white",
          "hover:shadow-[0_6px_20px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.5)]",
          "active:scale-[0.98]",
        ].join(" "),
      },

      size: {
        default: "h-9 rounded-md px-4 py-2 text-sm",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "size-9 rounded-md",
        pill: "h-12 rounded-full px-6 text-base font-semibold",
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
