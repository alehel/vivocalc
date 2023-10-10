export function formatNumber(num: number): string {
  const fixedNumString = num.toFixed(2);
  const fixedNum = Number(fixedNumString);
  return (
    fixedNum.toLocaleString("nb-NO", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + " kr"
  );
}
