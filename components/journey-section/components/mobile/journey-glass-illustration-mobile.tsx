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
    <div className="relative aspect-square w-full">
      {/* Decorative blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat opacity-60"
      />

      {/* Glass shape */}
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-2 overflow-hidden border border-white/30 bg-white/10",
          "shadow-[0_4px_12px_rgba(0,0,0,0.03)]",
          blobShapeClass,
        )}
      />

      {/* Image */}
      <Image
        src={src}
        alt={alt}
        width={400}
        height={400}
        sizes="(max-width: 480px) 80vw, 280px"
        className="relative z-10 h-full w-full object-cover"
      />
    </div>
  );
};
