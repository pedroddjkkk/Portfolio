import { cn } from "@/lib/cn";

interface CornerProps {
  size: number;
  padding?: number;
  inverted?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export function Corner({ size, padding = 20, inverted, children, className }: CornerProps) {
  return (
    <div className={cn(className)}>
      <div className={cn("from-blue-500 to-pink-400", inverted ? "rounded-l-full bg-gradient-to-l" : "rounded-r-full bg-gradient-to-r")} style={{ width: size, height: padding, translate: `${inverted ? `0 ${size}px` : ""}` }} />
      <div className="flex flex-row">
        <div className={cn("from-blue-500 to-pink-400", inverted ? "rounded-t-full bg-gradient-to-t" : "rounded-b-full bg-gradient-to-b")} style={{ height: size, width: padding, translate: `${inverted ? `${size}px 0` : ""}` }} />
        {children}
      </div>
    </div>
  )
}