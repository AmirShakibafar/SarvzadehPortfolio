export function JourneyBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
      <div className="absolute top-[-5%] right-[-5%] w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.04)_0%,transparent_60%)]" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.03)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_90%_70%_at_50%_50%,#000_50%,transparent_100%)]" />
    </div>
  );
}
