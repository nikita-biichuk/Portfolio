export function SectionDivider() {
  return (
    <div className="relative w-full h-px my-2 overflow-visible flex items-center justify-center">
      <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="relative z-10 h-1.5 w-1.5 rounded-full bg-primary/60 shadow-[0_0_8px_2px] shadow-primary/30" />
    </div>
  );
}
