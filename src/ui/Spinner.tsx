import clsx from 'clsx';

interface SpinnerProps {
  className?: string;
}

export default function Spinner({ className }: SpinnerProps) {
  return (
    <img
      src="/images/form/spinner.svg"
      alt=""
      className={clsx('h-[30px] w-[30px] mx-auto', className)}
    />
  );
}
