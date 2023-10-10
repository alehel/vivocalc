import CostLine from "@/components/costline/CostLine";
import {
  calculateLoennsgrunnlag,
  calculateNettoSum,
  calculateSoskost,
  calculateTax,
  priceBeforeMva,
} from "@/lib/calculatorFunctions";
import { isAReasonablePositiveNumber, isAPercentage } from "@/lib/validators";
import React from "react";

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
  const validValues =
    isAReasonablePositiveNumber(pris) &&
    isAPercentage(mva) &&
    isAPercentage(skatt);

  const valideringFeilSymbol = " -";
  const utenMva = validValues
    ? priceBeforeMva(parseFloat(pris), parseFloat(mva)).toString()
    : valideringFeilSymbol;
  const loennsgrunnlag = validValues
    ? calculateLoennsgrunnlag(
        parseFloat(pris),
        parseFloat(mva),
        oektAga
      ).toString()
    : valideringFeilSymbol;
  const soskost = validValues
    ? calculateSoskost(parseFloat(pris), parseFloat(mva), oektAga).toString()
    : valideringFeilSymbol;
  const spartSkatt = validValues
    ? calculateTax(
        parseFloat(pris),
        parseFloat(mva),
        parseFloat(skatt),
        oektAga
      ).toString()
    : valideringFeilSymbol;
  const loennreduksjon = validValues
    ? calculateNettoSum(
        parseFloat(pris),
        parseFloat(mva),
        parseFloat(skatt),
        oektAga
      ).toString()
    : valideringFeilSymbol;

  console.log(loennreduksjon);
  return (
    <div className="text-sm w-full">
      <h2 className="text-gray-600 font-bold mb-2">Utregning</h2>
      <div className="text-sm/6">
        <CostLine leftValue="uten mva:" rightValue={utenMva} />
        <CostLine leftValue="lønnsgrunnlag:" rightValue={loennsgrunnlag} />
        <CostLine leftValue="soskost:" rightValue={soskost} />
        <CostLine leftValue="skatt:" rightValue={spartSkatt} underline={1} />
        <CostLine
          leftValue="netto sum:"
          rightValue={loennreduksjon}
          underline={2}
        />
      </div>
    </div>
  );
}
