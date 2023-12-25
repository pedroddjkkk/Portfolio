interface CornerProps {
  width: number;
  height: number;
}

export function Corner({ width, height }: CornerProps) {
  return (
    <div className={`w-[${width}px] h-[${height}px] from-green-500 to-blue-400 bg-gradient-to-br`} />
  )
}