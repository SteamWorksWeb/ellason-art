/**
 * Global Button Design System
 * ─────────────────────────────────────────────────────────────────────────────
 * Single source of truth for all button styles on the Ellason Art site.
 * No external dependencies — just a plain string constant + a tiny helper.
 *
 * Usage with <Link>:
 *   import { buttonVariants } from '@/components/ui/button';
 *   <Link href="/" className={buttonVariants()}>Label</Link>
 *
 * Usage as a <button>:
 *   import { buttonVariants } from '@/components/ui/button';
 *   <button className={buttonVariants()}>Label</button>
 *
 * Custom padding can be added via the `className` prop on the element — it
 * will not conflict because Tailwind doesn't generate `px-`/`py-` from here.
 */

// ─── Variant definitions ──────────────────────────────────────────────────────

const variants = {
  default:
    'bg-[#1f1e1c] text-[#faf8f5] hover:bg-[#333230] hover:text-white rounded-md font-medium uppercase tracking-wide text-sm transition-colors',
  ghost:
    'bg-[#1f1e1c] text-[#faf8f5] hover:bg-[#333230] hover:text-white rounded-md font-medium uppercase tracking-wide text-sm transition-colors',
  outline:
    'bg-transparent border border-[#faf8f5] text-[#faf8f5] hover:border-white hover:text-white rounded-md font-medium uppercase tracking-wide text-sm transition-colors',
  secondary:
    'bg-[#1f1e1c] text-[#faf8f5] hover:bg-[#333230] hover:text-white rounded-md font-medium uppercase tracking-wide text-sm transition-colors',
} as const;

// ─── Helper ───────────────────────────────────────────────────────────────────

/**
 * Returns the Tailwind class string for the given button variant.
 * All variants currently map to the same canonical style.
 */
export function buttonVariants(
  variant: keyof typeof variants = 'default'
): string {
  return variants[variant];
}

// Convenience alias — the raw default class string for direct use in className.
export const BTN = variants.default;
