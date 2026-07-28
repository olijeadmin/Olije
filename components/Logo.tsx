import Image from "next/image";

type LogoProps = {
  size?: number;
  showWordmark?: boolean;
  wordmarkColor?: string;
};

// Uses the actual official OLIJE logo file (public/logo.png) — a
// transparent PNG processed from the brand's source artwork. On light
// backgrounds it shows the full navy circle + gold swirl mark; on the navy
// footer, the navy circle blends into the background leaving a distinctive
// gold emblem — both read correctly with this single asset, no separate
// light/dark file needed.
export default function Logo({ size = 34, showWordmark = true, wordmarkColor = "#102A43" }: LogoProps) {
  return (
    <span className="flex items-center gap-2.5 min-w-0">
      <Image
        src="/logo.png"
        alt="OLIJE"
        width={size * 1.5}
        height={size * 1.5 * (591 / 600)}
        className="shrink-0 object-contain"
        style={{ width: size * 1.5, height: "auto" }}
        priority
      />
      {showWordmark && (
        <span
          className="font-serif font-bold tracking-[0.16em] whitespace-nowrap"
          style={{
            color: wordmarkColor,
            fontSize: size * 0.62,
            fontFamily: "var(--font-display), serif",
          }}
        >
          OLIJE
        </span>
      )}
    </span>
  );
}
