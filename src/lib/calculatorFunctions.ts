import { aga, fp, oektAga, otp } from "./standardValues";

export function priceBeforeMva(pris: number, mva: number): number {
  return pris / percentageAsDecimal(mva);
}

function percentageAsDecimal(value: number): number {
  if (value < 10) {
    return parseFloat("1.0" + value.toString().replace(".", ""));
  } else if (value < 100) {
    return parseFloat("1." + value.toString().replace(".", ""));
  } else {
    return 2.0;
  }
}

function calculateSoskostPercentage(isOektAga: boolean): number {
  return parseFloat(
    (
      percentageAsDecimal(isOektAga ? oektAga : aga) *
      percentageAsDecimal(otp) *
      percentageAsDecimal(fp)
    ).toFixed(2),
  );
}

export function calculateLoennsgrunnlag(
  pris: number,
  mva: number,
  isOektAga: boolean,
): number {
  console.log(
    "calculate lønnsgrunnlag: " + calculateSoskostPercentage(isOektAga),
  );
  return priceBeforeMva(pris, mva) / calculateSoskostPercentage(isOektAga);
}

export function calculateSoskost(
  pris: number,
  mva: number,
  isOektAga: boolean,
): number {
  return (
    priceBeforeMva(pris, mva) - calculateLoennsgrunnlag(pris, mva, isOektAga)
  );
}

export function calculateTax(
  pris: number,
  mva: number,
  skatt: number,
  isOektAga: boolean,
): number {
  return (calculateLoennsgrunnlag(pris, mva, isOektAga) / 100) * skatt;
}

export function calculateNettoSum(
  pris: number,
  mva: number,
  skatt: number,
  isOektAga: boolean,
): number {
  return (
    calculateLoennsgrunnlag(pris, mva, isOektAga) -
    calculateTax(pris, mva, skatt, isOektAga)
  );
}
