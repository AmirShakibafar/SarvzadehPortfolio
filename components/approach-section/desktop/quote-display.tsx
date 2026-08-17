import React from "react";
import Image from "next/image";

export function QuoteDisplay() {
  return (
    <div className="order-1 text-center lg:order-2 lg:text-right relative isolate">
      <div
        className="hidden md:block absolute -z-10 top-1/2 opacity-10 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-[url('/blob.svg')] bg-contain bg-center bg-no-repeat pointer-events-none"
        aria-hidden="true"
      />

      <div className="animate-fade-up" style={{ animationDelay: "200ms" }}>
        <span className="inline-block text-sm font-semibold tracking-wide text-primary">
          رویکرد من
        </span>
      </div>

      <div
        className="mt-2 text-8xl leading-none text-primary/15 animate-fade-up"
        style={{ animationDelay: "550ms" }}
      >
        ❝
      </div>

      <p
        className="mt-6 text-2xl font-light leading-[2.1] text-foreground md:text-3xl animate-fade-up"
        style={{ animationDelay: "900ms" }}
      >
        هدف من فقط تجویز یک رژیم غذایی نیست؛ بلکه همراهی با هر بیمار برای ساختن
        مسیری درمانی، علمی و ماندگار است.
      </p>

      <div
        className="mt-2 flex justify-end animate-fade-up"
        style={{ animationDelay: "1250ms" }}
      >
        <Image
          src="/images/approach/signiture.webp"
          alt="امضا دکتر رضا سروزاده"
          width={240}
          height={160}
          className="h-40 w-auto object-contain"
        />
      </div>
    </div>
  );
}
