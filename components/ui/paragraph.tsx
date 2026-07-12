import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const paragraphVariants = cva(
  "text-muted-foreground",
  {
    variants: {
      size: {
        default: "text-base leading-relaxed",
        sm: "text-sm leading-relaxed",
        lg: "text-lg leading-relaxed",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(paragraphVariants({ size, className }))}
        {...props}
      />
    )
  }
)
Paragraph.displayName = "Paragraph"

export { Paragraph, paragraphVariants }
