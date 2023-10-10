import React from "react";
import { formatNumber } from "@/lib/formatter";
import { isANumber } from "@/lib/validators";

export default function CostLine({
  operator = "",
  description,
  value,
  underline = 0,
}: {
  operator?: string;
  description: string;
  value: string;
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

  return (
    <div className={`min-w-full flex ${underlineStyle()}`}>
      <span className="min-w-[20px] max-w-[20px] text-right pr-2">
        {operator}
      </span>
      <span>{description}</span>
      <span className="text-right grow tabular-nums">
        {isANumber(value) ? formatNumber(parseFloat(value)) : value}
      </span>
    </div>
  );
}
