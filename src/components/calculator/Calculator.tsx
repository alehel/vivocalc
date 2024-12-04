"use client";

import React from "react";
import { CalculatorForm } from "./calculatorform";
import { CalculatorResults } from "./calculatorresults";
import { useState } from "react";

export default function Calculator() {
  const [pris, setPris] = useState("10000");
  const [mva, setMva] = useState("25");
  const [skatt, setSkatt] = useState("47.6");
  const [oektAga, setOektAga] = useState(false);

  return (
    <div className="md:flex md:space-x-12 space-y-8 md:space-y-0">
      <CalculatorForm
        pris={pris}
        setPris={setPris}
        mva={mva}
        setMva={setMva}
        skatt={skatt}
        setSkatt={setSkatt}
        oektAga={oektAga}
        setOektAga={setOektAga}
      />
      <CalculatorResults
        pris={pris}
        mva={mva}
        skatt={skatt}
        oektAga={oektAga}
      />
    </div>
  );
}
