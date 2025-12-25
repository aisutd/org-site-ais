import Image from "next/image";

export default function HackAI26Page() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      {/* Base image */}
      <Image
        src="/hackai/hackai26-preview/hackai-bg.png"
        alt="HackAI wall background"
        fill
        priority
        className="object-cover z-0"
      />

      {/* Content */}
      <div className="pt-[5rem] absolute inset-0 z-1 flex h-full items-center justify-center flex-col pointer-events-auto">
        <Image
          src="/images/Logos/ais_logo_white.png"
          alt="HackAI 2026"
          width={150}
          height={200}
        />
        <span className="text-[#fff9f5] font-allerta mt-4">PRESENTS</span>
        <Image
          src="/hackai/hackai26-preview/hackai-2026.png"
          alt="HackAI 2026"
          width={900}
          height={200}
        />
        <div className="flex flex-col items-center text-[#fff9f5] font-allerta gap-2">
          <span className="text-3xl text-bold text-white ">MARCH 7TH-8TH</span>
          <span className="text-xl opacity-80 uppercase">registration opens in January, stay tuned!</span>
          <a href="/hackAI">
            <button className="uppercase mt-4 px-6 py-2 border border-[#fff9f5] rounded hover:bg-[#fff9f5] hover:text-black transition-colors cursor-pointer">
                Learn more about HackAI
            </button>
          </a>
        </div>
      </div>

      {/* Lighting Layer */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundColor: '#000', 
          mixBlendMode: 'multiply', 
          animation: 'fadeOut 0.5s ease-out 3s forwards'
        }}
      >
        {/* Left Spotlight */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            // Warm white light to reveal the logo/bg
            background: 'radial-gradient(circle at 10% 30%, #fff9c4 0%, transparent 40%)',
            opacity: 0,
            animation: 'leftFlicker 0.8s steps(1) 0.3s',
          }}
        />

        {/* Right Spotlight */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 90% 30%, #fff9c4 0%, transparent 40%)',
            opacity: 0,
            animation: 'rightFlicker 0.8s steps(1) 1.3s',
          }}
        />

        {/* Full Illumination */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 50% 50%, #ffffff 20%, transparent 120%)',
            opacity: 0,
            animation: 'fullLight 0.7s steps(1) 2.3s forwards',
          }}
        />
      </div>

      {/* Keyframe animations */}
      <style jsx>{`
        @keyframes leftFlicker {
          0% { opacity: 0; }
          5% { opacity: 1; }
          10% { opacity: 0; }
          15% { opacity: 0; }
          20% { opacity: 1; }
          25% { opacity: 0; }
          30% { opacity: 1; }
          35% { opacity: 1; }
          40% { opacity: 0; }
          45% { opacity: 0; }
          50% { opacity: 1; }
          55% { opacity: 0; }
          60% { opacity: 1; }
          65% { opacity: 0; }
          70% { opacity: 0; }
          100% { opacity: 0; }
        }

        @keyframes rightFlicker {
          0% { opacity: 0; }
          8% { opacity: 1; }
          12% { opacity: 0; }
          18% { opacity: 0; }
          22% { opacity: 1; }
          28% { opacity: 0; }
          32% { opacity: 1; }
          38% { opacity: 1; }
          42% { opacity: 0; }
          48% { opacity: 1; }
          52% { opacity: 0; }
          58% { opacity: 0; }
          62% { opacity: 1; }
          68% { opacity: 0; }
          100% { opacity: 0; }
        }

        @keyframes fullLight {
          0% { opacity: 0; }
          10% { opacity: 1; }
          15% { opacity: 0; }
          20% { opacity: 1; }
          25% { opacity: 0; }
          30% { opacity: 0; }
          35% { opacity: 1; }
          40% { opacity: 0; }
          45% { opacity: 1; }
          50% { opacity: 1; }
          55% { opacity: 0; }
          60% { opacity: 1; }
          100% { opacity: 1; }
        }

        @keyframes fadeOut {
          to { opacity: 0; visibility: hidden; }
        }
      `}</style>
    </div>
  );
}