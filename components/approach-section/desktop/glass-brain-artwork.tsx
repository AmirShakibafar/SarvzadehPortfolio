import React from "react";
import Image from "next/image";

export function GlassBrainArtwork() {
  return (
    <div className="order-2 flex w-full justify-center lg:order-1 isolate">
      <div className="animate-scale-fade-up relative isolate z-0 flex aspect-square w-full max-w-[480px] items-center justify-center">
        <div
          className="absolute left-1/2 top-1/2 -z-20 h-[150%] w-[150%] opacity-40 -translate-x-1/2 -translate-y-1/2 bg-contain bg-center bg-no-repeat pointer-events-none"
          style={{ backgroundImage: "url('/blob.svg')" }}
          aria-hidden="true"
        />

        <div className="relative z-10 h-full w-full">
          <Image
            src="/images/approach/brain2.webp"
            alt="Glass Brain"
            fill
            className="object-contain"
            draggable={false}
            sizes="(max-width: 480px) 100vw, 480px"
          />
        </div>
      </div>
    </div>
  );
}
