import React, { ChangeEvent, useState } from "react";

export default function TextInput({
  id,
  labelText,
  onChange,
  value = "",
  validator,
}: {
  id: string;
  labelText: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  value?: string;
  validator?: Function;
}) {
  const [validatioOk, setValidationOk] = useState(true);

  function onChangeWithValidation(e: ChangeEvent<HTMLInputElement>) {
    if (validator !== undefined) {
      setValidationOk(validator(e.currentTarget.value));
    }

    if (onChange !== undefined) {
      onChange(e);
    }
  }

  return (
    <div className="mb-4">
      <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor={id}>
        {labelText}
      </label>
      <input
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-[#152534] ${
          !validatioOk ? "bg-red-100" : ""
        }`}
        id={id}
        type="text"
        onChange={onChangeWithValidation}
        value={value}
      />
    </div>
  );
}
