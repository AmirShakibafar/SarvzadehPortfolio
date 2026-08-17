import Image from "next/image";

// ============================================================================
// CONTINUOUS BACKGROUND ATMOSPHERE
// ============================================================================
export function MedicalBackground() {
  return (
    <div
      className="fixed inset-0 -z-50 overflow-hidden bg-[#FAFAFA] pointer-events-none"
      aria-hidden="true"
    >
      <Image
        src="/blob.svg"
        alt=""
        width={800}
        height={800}
        priority
        className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] opacity-70"
      />

      <Image
        src="/blob.svg"
        alt=""
        width={800}
        height={800}
        className="absolute top-[40%] left-[-10%] w-[50vw] h-[50vw] opacity-60"
      />

      <Image
        src="/blob.svg"
        alt=""
        width={800}
        height={800}
        className="absolute bottom-[-10%] right-[20%] w-[70vw] h-[70vw] opacity-50"
      />
    </div>
  );
}
