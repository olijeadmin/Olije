import Image from "next/image";

type LogoProps = {
  size?: number;
  src?: string;
  showWordmark?: boolean;
  wordmarkColor?: string;
  wordmarkFont?: string;
};

// Uses the actual official OLIJE logo file (public/logo.png) by default.
// A custom source can be provided for alternate logo variants, such as the
// white footer logo asset.
export default function Logo({
  size = 34,
  src = "/logo.png",
  showWordmark = true,
  wordmarkColor = "#102A43",
  wordmarkFont = "var(--font-display), serif",
}: LogoProps) {
  return (
    <span className="flex items-center gap-2.5 min-w-0">
      <Image
        src={src}
        alt="OLIJE"
        width={size * 1.5}
        height={size * 1.5 * (591 / 600)}
        className="shrink-0 object-contain"
        style={{ width: size * 1.5, height: "auto" }}
        priority
      />
      {showWordmark && (
        <span className="font-serif font-bold tracking-[0.16em] whitespace-nowrap" style={{ color: wordmarkColor, fontSize: size * 0.62, fontFamily: wordmarkFont }}>
          OLIJE
        </span>
      )}
    </span>
  );
}
