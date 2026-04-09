import Image from "next/image";
import logoMark from "../../public/images/logo-mark.png";

type BrandLogoProps = {
  compact?: boolean;
};

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <div
      className={
        compact
          ? "flex items-center gap-8 sm:gap-4"
          : "flex items-center gap-2.5 sm:gap-3"
      }
    >
      <Image
        src={logoMark}
        alt="Nova Sync logo mark"
        className={compact ? "h-8 w-auto" : "h-8 w-auto sm:h-10"}
      />
      <span
        className={
          compact
            ? "font-headline text-lg font-extrabold tracking-tight text-white sm:text-xl"
            : "font-headline text-lg font-extrabold tracking-tight text-white sm:text-xl lg:text-2xl"
        }
      >
        Nova Sync
      </span>
    </div>
  );
}
