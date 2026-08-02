/**
 * A permutation of `0..count-1`, used to deal cards into ring positions.
 *
 * Both 3D rings render their cards in the canonical project order — that is
 * what the server prerenders, and what the tab order follows — then call this
 * to decide which slot each one occupies. Shuffling positions rather than the
 * markup means the arrangement differs on every visit without any image being
 * re-fetched or the prerendered HTML going stale.
 *
 * Client-only: it must not run during the server render, or the two would
 * disagree.
 */
export function shuffledSlots(count: number): number[] {
  const slots = Array.from({ length: count }, (_, index) => index);
  for (let i = slots.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [slots[i], slots[j]] = [slots[j]!, slots[i]!];
  }
  return slots;
}
