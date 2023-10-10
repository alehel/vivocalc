import React from "react";
import { formatNumber } from "@/lib/formatter";
import { isANumber } from "@/lib/validators";

export default function CostLine({
  leftValue,
  rightValue,
  underline = 0,
}: {
  leftValue: string;
  rightValue: string;
  underline?: number;
}) {
  const underlineStyle = (): string => {
    if (underline == 1) {
      return "border-b-2 border-gray-600";
    }

    if (underline == 2) {
      return "border-b-4 border-gray-600 border-double";
    }

    return "";
  };
  isANumber;

  return (
    <div className={`min-w-full space-x-8 flex ${underlineStyle()}`}>
      <span>{leftValue}</span>
      <span className="text-right grow tabular-nums">
        {isANumber(rightValue) ? formatNumber(parseFloat(rightValue)) : rightValue}
      </span>
    </div>
  );
}
