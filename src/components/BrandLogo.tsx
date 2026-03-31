import Image from "next/image";
import logoMark from "../../public/images/logo-mark.png";

type BrandLogoProps = {
  compact?: boolean;
};

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={logoMark}
        alt="Nova Sync logo mark"
        className={compact ? "h-8 w-auto" : "h-10 w-auto"}
      />
      <span
        className={
          compact
            ? "font-headline text-xl font-extrabold tracking-tight text-white"
            : "font-headline text-2xl font-extrabold tracking-tight text-white"
        }
      >
        Nova Sync
      </span>
    </div>
  );
}
