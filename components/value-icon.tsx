import { ShieldCheck, Blocks, HeartHandshake, Apple, type LucideIcon } from 'lucide-react'

const icons: Record<string, LucideIcon> = {
  'shield-check': ShieldCheck,
  blocks: Blocks,
  'heart-handshake': HeartHandshake,
  apple: Apple,
}

export function ValueIcon({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  const Icon = icons[name] ?? Blocks
  return <Icon className={className} aria-hidden="true" />
}
