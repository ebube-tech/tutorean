import clsx from "clsx";
import Image from "next/image";

interface SpinnerProps {
  className?: string;
}

export default function Spinner({ className }: SpinnerProps) {
  return (
    <Image
      src="/images/form/spinner.svg"
      alt=""
      className={clsx("h-[30px] w-[30px] mx-auto", className)}
      height={30}
      width={30}
    />
  );
}
