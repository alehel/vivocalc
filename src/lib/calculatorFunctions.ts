export function priceBeforeMva(pris: number, mva: number): number {
  return pris / parseFloat("1." + mva.toString());
}

export function calculateLoennsgrunnlag(
  pris: number,
  mva: number,
  oektAga: boolean
): number {
  const faktor = oektAga ? 1.4 : 1.34;
  return priceBeforeMva(pris, mva) / faktor;
}

export function calculateSoskost(
  pris: number,
  mva: number,
  oektAga: boolean
): number {
  return (
    priceBeforeMva(pris, mva) - calculateLoennsgrunnlag(pris, mva, oektAga)
  );
}

export function calculateTax(
  pris: number,
  mva: number,
  skatt: number,
  oektAga: boolean
): number {
  return (calculateLoennsgrunnlag(pris, mva, oektAga) / 100) * skatt;
}

export function calculateNettoSum(
  pris: number,
  mva: number,
  skatt: number,
  oektAga: boolean
): number {
  return (
    calculateLoennsgrunnlag(pris, mva, oektAga) -
    calculateTax(pris, mva, skatt, oektAga)
  );
}