import React from "react";
import { TextInput } from "@/components/textinput";
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
      <TextInput
        id="pris"
        labelText="Pris"
        value={pris}
        onChange={(e) => setPris(e.currentTarget.value)}
        validator={isAReasonablePositiveNumber}
      />

      <TextInput
        id="mva"
        labelText="Mva"
        value={mva}
        onChange={(e) => setMva(e.currentTarget.value)}
        validator={isAPercentage}
      />

      <TextInput
        id="skatt"
        labelText="Skatt"
        value={skatt}
        onChange={(e) => setSkatt(e.currentTarget.value)}
        validator={isAPercentage}
      />

      <CheckboxInput
        id="aga"
        labelText="Økt AGA"
        checked={oektAga}
        onChange={(e) => setOektAga(e.currentTarget.checked)}
      />
    </form>
  );
}
