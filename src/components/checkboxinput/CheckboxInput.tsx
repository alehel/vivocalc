import React from "react";

export default function CheckboxInput({
  id,
  labelText,
  checked = false,
  onChange,
}: {
  id: string;
  labelText: string;
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <div>
      <label
        className="block text-gray-600 font-bold text-sm mb-2 cursor-pointer"
        htmlFor={id}
      >
        <input
          id={id}
          className="mr-2 cursor-pointer"
          type="checkbox"
          onChange={onChange}
          checked={checked}
        />
        {labelText}
      </label>
    </div>
  );
}
