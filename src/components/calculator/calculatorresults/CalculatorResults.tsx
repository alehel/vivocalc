import React from "react";
import CostLine from "@/components/costline/CostLine";
import {
  calculateLoennsgrunnlag,
  calculateNettoSum,
  calculateSoskost,
  calculateTax,
  priceBeforeMva,
} from "@/lib/calculatorFunctions";
import { isAReasonablePositiveNumber, isAPercentage } from "@/lib/validators";

export default function CalculatorResults({
  pris,
  mva,
  skatt,
  oektAga,
}: {
  pris: string;
  mva: string;
  skatt: string;
  oektAga: boolean;
}) {
  const errorSymbol = " -";
  const validValues =
    isAReasonablePositiveNumber(pris) &&
    isAPercentage(mva) &&
    isAPercentage(skatt);

  const calcValue = (fn: Function, ...args: any[]) => {
    const parsedArgs = args.map((arg) =>
      typeof arg === "boolean" ? arg : parseFloat(arg),
    );
    return validValues ? fn(...parsedArgs).toString() : errorSymbol;
  };

  const utenMva = calcValue(priceBeforeMva, pris, mva);
  const loennsgrunnlag = calcValue(calculateLoennsgrunnlag, pris, mva, oektAga);
  const soskost = calcValue(calculateSoskost, pris, mva, oektAga);
  const spartSkatt = calcValue(calculateTax, pris, mva, skatt, oektAga);
  const loennreduksjon = calcValue(
    calculateNettoSum,
    pris,
    mva,
    skatt,
    oektAga,
  );
  const mvaKr = validValues
    ? (parseFloat(pris) - parseFloat(utenMva)).toString()
    : errorSymbol;

  return (
    <div className="text-sm w-full">
      <h2 className="text-gray-600 font-bold mb-2">Utregning</h2>
      <div>
        <CostLine
          description="kost"
          value={validValues ? pris : errorSymbol}
        />
        <CostLine
          description={`mva (${validValues ? mva : errorSymbol}%)`}
          value={mvaKr}
          operator="-"
        />
        <CostLine
          description="trekkgrunnlag"
          value={utenMva}
          operator="="
        />
        <CostLine
          description="soskost"
          value={soskost}
          operator="-"
        />
        <CostLine
          description="lønnstrekk (brutto)"
          value={loennsgrunnlag}
          operator="="
        />
        <CostLine
          description={`skatt (${validValues ? skatt : errorSymbol}%)`}
          value={spartSkatt}
          underline={1}
          operator="-"
        />
        <CostLine
          description="lønnstrekk (netto)"
          value={loennreduksjon}
          operator="="
          underline={2}
        />
      </div>
    </div>
  );
}
