export function priceBeforeMva(pris: number, mva: number): number {
  return pris / parseFloat("1." + mva.toString());
}

export function calculateLoennsgrunnlag(pris: number, mva: number): number {
  return priceBeforeMva(pris, mva) / 1.34;
}

export function calculateSoskost(pris: number, mva: number): number {
  return priceBeforeMva(pris, mva) - calculateLoennsgrunnlag(pris, mva);
}

export function calculateTax(pris: number, mva: number, skatt: number): number {
  return (calculateLoennsgrunnlag(pris, mva) / 100) * skatt;
}

export function calculateNettoSum(
  pris: number,
  mva: number,
  skatt: number
): number {
  return calculateLoennsgrunnlag(pris, mva) - calculateTax(pris, mva, skatt);
}
