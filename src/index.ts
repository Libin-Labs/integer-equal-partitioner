export function partitionInteger(total: number, parts: number): number[] {
  if (
    !Number.isSafeInteger(total) ||
    total < 0 ||
    !Number.isSafeInteger(parts) ||
    parts < 1 ||
    parts > 1000000
  )
    throw new RangeError('Expected nonnegative safe total and 1 through 1000000 parts');
  const base = Math.floor(total / parts),
    remainder = total % parts;
  return Array.from({ length: parts }, (_, i) => base + (i < remainder ? 1 : 0));
}
