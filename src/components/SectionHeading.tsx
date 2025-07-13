export function SectionHeading({ background, title }: { background: string; title: string }) {
  return (
    <div className="relative text-center mb-12">
      <span className="absolute inset-0 text-[80px] sm:text-[100px] font-[magnolia] text-[#0F1C3F] opacity-80 leading-none pointer-events-none -top-16 z-10">
        {background}
      </span>
      <h2 className="relative text-4xl sm:text-5xl font-extrabold text-white z-0">{title}</h2>
    </div>
  );
}
