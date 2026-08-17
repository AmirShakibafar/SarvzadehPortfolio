import Image from "next/image";
import { cn } from "@/lib/utils";

interface IllustrationMobileProps {
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

export const JourneyGlassIllustrationMobile = ({
  src,
  alt,
  index = 0,
}: IllustrationMobileProps) => {
  const blobShapeClass = BLOB_SHAPES[index % BLOB_SHAPES.length];

  return (
    <div
      className="animate-soft-scale-fade-up relative z-0 flex aspect-square w-full items-center justify-center isolate stagger-item"
      style={{
        // 100ms base delay + 100ms stagger per item for slightly faster mobile cadence
        animationDelay: `${100 + index * 100}ms`,
      }}
    >
      <div
        className="absolute left-1/2 top-1/2 -z-10 opacity-60 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat pointer-events-none"
        aria-hidden="true"
      />

      <div
        className={cn(
          "absolute inset-2 -z-10 bg-white/10 border border-white/30 shadow-[0_4px_12px_rgba(0,0,0,0.03),inset_0_1px_0_rgba(255,255,255,0.4)] overflow-hidden",
          blobShapeClass,
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 flex h-[95%] w-[95%] items-center justify-center">
        <Image
          src={src}
          alt={alt}
          width={400}
          height={400}
          className="h-full w-full object-cover"
          sizes="(max-width: 480px) 100vw, 400px"
        />
      </div>
    </div>
  );
};
