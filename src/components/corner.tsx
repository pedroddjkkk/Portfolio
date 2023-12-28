import { cn } from "@/lib/cn";

interface CornerProps {
  size: number;
  padding?: number;
}

export function Corner({ size, padding = 20 }: CornerProps) {
  return (
    <>
      <div className={`from-green-500 to-blue-400 bg-gradient-to-br rounded-r-full`} style={{ width: size, height: padding }} />
      <div className={`from-green-500 to-blue-400 bg-gradient-to-br rounded-b-full`} style={{ height: size, width: padding }} />
    </>
  )
}