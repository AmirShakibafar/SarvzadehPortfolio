import Image from "next/image";
import { cn } from "@/lib/utils";

interface IllustrationProps {
  src: string;
  alt: string;
  index?: number;
}

const BLOB_SHAPES = [
  "rounded-[60%_40%_30%_70%/60%_30%_70%_40%]",
  "rounded-[30%_70%_70%_30%/30%_30%_70%_70%]",
  "rounded-[50%_50%_20%_80%/25%_80%_20%_75%]",
  "rounded-[40%_60%_70%_30%/40%_50%_60%_50%]",
  "rounded-[70%_30%_50%_50%/60%_40%_60%_40%]",
];

export const JourneyGlassIllustration = ({
  src,
  alt,
  index = 0,
}: IllustrationProps) => {
  const blobShapeClass = BLOB_SHAPES[index % BLOB_SHAPES.length];

  return (
    <div
      className="animate-soft-scale-fade-up relative z-0 flex aspect-square w-full items-center justify-center isolate stagger-item"
      style={{
        // 200ms base delay + 200ms stagger per item
        animationDelay: `${200 + index * 200}ms`,
      }}
    >
      <div
        className="absolute left-1/2 top-1/2 -z-20 h-[150%] w-[150%] max-w-4xl -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      {/* Replaced GlassCard with a raw div to prevent overriding the fluid border-radius */}
      <div
        className={cn(
          "absolute inset-0 md:inset-2 -z-10 bg-white/10 border border-white/30 shadow-[0_8px_30px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,0.8)] overflow-hidden transition-all duration-700",
          blobShapeClass,
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-white/10 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 flex h-[95%] w-[95%] items-center justify-center">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={800}
          className="h-full w-full object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
};
