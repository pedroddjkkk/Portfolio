import { cn } from "@/lib/cn";

interface CornerProps {
  size: number;
  padding?: number;
  inverted?: boolean;
  children?: React.ReactNode;
  className?: string;
  twoCorners?: boolean;
}

export function Corner({ size, padding = 20, inverted, children, className, twoCorners }: CornerProps) {
  return (
    <>
      <div className={cn("from-blue-500 to-pink-400", inverted ? "rounded-l-full bg-gradient-to-l" : "rounded-r-full bg-gradient-to-r")} style={{ width: size, height: padding, translate: `${inverted ? `0 ${size}px` : ""}` }} />
      <div className="flex flex-row">
        <div className={cn("from-blue-500 to-pink-400", inverted ? "rounded-t-full bg-gradient-to-t" : "rounded-b-full bg-gradient-to-b")} style={{ height: size, width: padding, translate: `${inverted ? `${size}px 0` : ""}` }} />
        <div className="relative w-full">
          <div className={cn(className)}>
            {children}
          </div>
          {twoCorners ? (
            <>
              <div className={cn("from-blue-500 to-pink-400 rounded-l-full bg-gradient-to-l absolute top-full")} style={{ width: size, height: padding, left: `calc(100% - ${size}px)` }} />
              <div className={cn("from-blue-500 to-pink-400 rounded-t-full bg-gradient-to-t absolute left-full")} style={{ height: size, width: padding, top: `calc(100% - ${size - padding}px)` }} />
            </>
          ) : null}
        </div>
      </div>
    </>
  )
}