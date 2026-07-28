import { cn } from '@/lib/utils'

/** Simple geometric brand mark: a sun over a rolling meadow. */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground',
        className,
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-[60%] w-[60%]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="9" r="3.5" fill="currentColor" />
        <path
          d="M4 18c2.5-2.4 5-3.6 8-3.6s5.5 1.2 8 3.6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M12 2.5v1.5M18.5 4.9l-1 1M21.5 9h-1.5M5.5 9H4M6.5 5.9l-1-1"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    </span>
  )
}
