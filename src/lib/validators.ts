export function isANumber(value: string) {
  return !isNaN(value as any) && value !== "";
}

export function isAReasonablePositiveNumber(value: string) {
  if (isNaN(value as any)) {
    return false;
  }

  const valueAsNumber = parseFloat(value);
  return valueAsNumber >= 0 && valueAsNumber < 1_000_000;
}

export function isAPercentage(value: string) {
  if (isNaN(value as any)) {
    return false;
  }

  const valueAsNumber = parseFloat(value);
  return valueAsNumber >= 0 && valueAsNumber <= 100;
}
