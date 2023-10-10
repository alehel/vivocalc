import CostLine from "@/components/costline/CostLine";
import {
  calculateLoennsgrunnlag,
  calculateNettoSum,
  calculateSoskost,
  calculateTax,
  priceBeforeMva,
} from "@/lib/calculatorFunctions";
import { isANumber } from "@/lib/validators";
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
  const validValues = [pris, mva, skatt].every(isANumber);

  const calculateAndDisplayValue = (
    calculationFunction: Function,
    ...args: number[]
  ) => (validValues ? " " + calculationFunction(...args).toFixed(2) : " -");

  return (
    <div className="text-sm">
      <h2 className="text-gray-600 font-bold mb-2">Utregning</h2>
      <div className="text-sm/6">
        <CostLine
          leftValue="uten mva:"
          rightValue={calculateAndDisplayValue(
            priceBeforeMva,
            parseFloat(pris),
            parseFloat(mva)
          )}
        />
        <CostLine
          leftValue="lønnsgrunnlag:"
          rightValue={calculateAndDisplayValue(
            calculateLoennsgrunnlag,
            parseFloat(pris),
            parseFloat(mva)
          )}
        />
        <CostLine
          leftValue="soskost:"
          rightValue={calculateAndDisplayValue(
            calculateSoskost,
            parseFloat(pris),
            parseFloat(mva)
          )}
        />
        <CostLine
          leftValue="skatt:"
          rightValue={calculateAndDisplayValue(
            calculateTax,
            parseFloat(pris),
            parseFloat(mva),
            parseFloat(skatt)
          )}
          underline={1}
        />
        <CostLine
          leftValue="estimert netto lønnreduksjon:"
          rightValue={calculateAndDisplayValue(
            calculateNettoSum,
            parseFloat(pris),
            parseFloat(mva),
            parseFloat(skatt)
          )}
          underline={2}
        />
      </div>
    </div>
  );
}
