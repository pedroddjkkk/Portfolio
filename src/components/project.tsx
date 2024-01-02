import Link from "next/link";

interface ProjectProps {
  children: React.ReactNode
  href: string
}

export function Project({ href, children }: ProjectProps) {
  return (
    <Link href={href} className="text-white text-xl font-extralight ">
      <span className="w-fit after:h-px after:from-blue-500 after:to-pink-400 after:bg-gradient-to-b flex flex-col hover:tracking-wider transition-all duration-300">
        {children}
      </span>
    </Link>
  )
}