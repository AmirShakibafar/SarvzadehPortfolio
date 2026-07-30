import React from "react";

export function QuoteDisplay() {
  return (
    <div className="order-1 text-center lg:order-2 lg:text-right">
      <div className="text-8xl leading-none text-primary/15">❝</div>

      <p className="mt-6 text-2xl font-light leading-[2.1] text-foreground md:text-3xl">
        هدف من فقط تجویز یک رژیم غذایی نیست؛ بلکه همراهی با هر بیمار برای ساختن
        مسیری درمانی، علمی و ماندگار است.
      </p>

      {/* justify-end pushes the image to the left (end of RTL flow) */}
      <div className="mt-2 flex justify-end">
        <img
          src="/images/approach/signiture.png"
          alt="امضا دکتر رضا سروزاده"
          className="h-40 w-auto"
        />
      </div>
    </div>
  );
}
