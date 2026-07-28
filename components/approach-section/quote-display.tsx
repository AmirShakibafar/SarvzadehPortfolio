import React from "react";

export function QuoteDisplay() {
  return (
    <div className="order-1 text-center lg:order-2 lg:text-right">
      <div className="text-8xl leading-none text-primary/15">❝</div>

      <p className="mt-6 text-2xl font-light leading-[2.1] text-foreground md:text-3xl">
        هدف من فقط تجویز یک رژیم غذایی نیست؛ بلکه همراهی با هر بیمار برای ساختن
        مسیری درمانی، علمی و ماندگار است.
      </p>

      <div className="mt-12 flex justify-between">
        <div>
          <div className="text-lg font-semibold text-foreground">
            دکتر رضا سروزاده
          </div>
          <div className="mt-2 text-sm text-muted-foreground">
            متخصص تغذیه بالینی
          </div>
        </div>
        <img
          src="/images/approach/signiture.png"
          alt="امضا دکتر رضا سروزاده"
          className="h-40 w-auto -translate-y-12"
        />
      </div>
    </div>
  );
}
