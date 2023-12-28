import { cn } from "@/lib/cn";

interface CornerProps {
  size: number;
  padding?: number;
  inverted?: boolean;
}

export function Corner({ size, padding = 20, inverted }: CornerProps) {
  return (
    <>
      <div className={cn(`from-green-500 to-blue-400 bg-gradient-to-br`, inverted ? "rounded-l-full" : "rounded-r-full")} style={{ width: size, height: padding, translate: `${inverted ? `0 ${size}px` : ""}` }} />
      <div className={cn(`from-green-500 to-blue-400 bg-gradient-to-br`, inverted ? "rounded-t-full" : "rounded-b-full")} style={{ height: size, width: padding, translate: `${inverted ? `${size}px 0` : ""}` }} />
    </>
  )
}