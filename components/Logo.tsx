import Link from "next/link";
import LogoMark from "./LogoMark";

export default function Logo({
  variant = "dark",
  iconOnly = false,
}: {
  variant?: "dark" | "light";
  iconOnly?: boolean;
}) {
  const textColor = variant === "light" ? "text-white" : "text-navy-900";
  const accentColor = "text-accent-500";

  return (
    <Link href="/" className="inline-flex items-center gap-2.5">
      <LogoMark size={32} />
      {!iconOnly && (
        <span className="inline-flex items-baseline gap-1.5 font-extrabold tracking-tight">
          <span className={`text-xl ${textColor}`}>SKILY</span>
          <span className={`text-xl ${accentColor}`}>CONSULTING</span>
        </span>
      )}
    </Link>
  );
}
