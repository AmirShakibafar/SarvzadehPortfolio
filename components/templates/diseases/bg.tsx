// ============================================================================
// CONTINUOUS BACKGROUND ATMOSPHERE
// ============================================================================
export function MedicalBackground() {
  return (
    <div
      className="fixed inset-0 -z-50 overflow-hidden bg-[#FAFAFA] pointer-events-none"
      aria-hidden="true"
    >
      <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-primary/5 rounded-full   opacity-70" />
      <div className="absolute top-[40%] left-[-10%] w-[50vw] h-[50vw] bg-primary/5 rounded-full   opacity-60" />
      <div className="absolute bottom-[-10%] right-[20%] w-[70vw] h-[70vw] bg-emerald-50/40 rounded-full   opacity-50" />
    </div>
  );
}
