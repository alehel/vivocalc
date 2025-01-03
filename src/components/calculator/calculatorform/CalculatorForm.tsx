import React from "react";
import { NumberInput } from "@/components/numberinput";
import { CheckboxInput } from "../../checkboxinput";
import { isAPercentage, isAReasonablePositiveNumber } from "@/lib/validators";

export default function CalculatorForm({
  pris,
  setPris,
  mva,
  setMva,
  skatt,
  setSkatt,
  oektAga,
  setOektAga,
}: {
  pris: string;
  setPris: React.Dispatch<React.SetStateAction<string>>;
  mva: string;
  setMva: React.Dispatch<React.SetStateAction<string>>;
  skatt: string;
  setSkatt: React.Dispatch<React.SetStateAction<string>>;
  oektAga: boolean;
  setOektAga: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <form className="w-full print:hidden">
      <NumberInput
        id="pris"
        labelText="Pris"
        value={pris}
        onChange={(e) => setPris(e.currentTarget.value)}
        validator={isAReasonablePositiveNumber}
      />

      <NumberInput
        id="mva"
        labelText="Mva"
        value={mva}
        onChange={(e) => setMva(e.currentTarget.value)}
        validator={isAPercentage}
      />

      <NumberInput
        id="skatt"
        labelText="Skatt"
        value={skatt}
        onChange={(e) => setSkatt(e.currentTarget.value)}
        validator={isAPercentage}
      />
    </form>
  );
}
