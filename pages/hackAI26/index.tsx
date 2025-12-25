import Image from "next/image";

export default function HackAI26Page() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <Image
        src="/hackai/hackai26-preview/hackai-bg.png"
        alt="HackAI wall background"
        fill
        priority
        className="object-cover"
      />

      {/* Content on top */}
      <div className="relative z-10 flex h-full items-center justify-center flex-col">
        <Image
          src="/images/Logos/ais_logo_white.png"
          alt="HackAI 2026"
          width={150}
          height={200}
        />
        <span className="text-[#fff9f5] font-allerta">PRESENTS</span>
        <Image
          src="/hackai/hackai26-preview/hackai-2026.png"
          alt="HackAI 2026"
          width={900}
          height={200}
        />
        <div className="flex flex-col items-center text-[#fff9f5] font-allerta">
            <span>march 7th-8th</span>
            <span>registration opens [date], 2026</span>
            <button>learn more about HackAI</button>
        </div>
      </div>
    </div>
  );
}
