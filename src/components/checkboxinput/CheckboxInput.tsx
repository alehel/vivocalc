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
    <div className="flex items-center space-x-2">
      <input
        id={id}
        className="shadow cursor-pointer rounded border-[#cfd0d4] focus:ring-[#152534]"
        type="checkbox"
        onChange={onChange}
        checked={checked}
      />
      <label
        className="block text-gray-600 font-bold text-sm cursor-pointer"
        htmlFor={id}
      >
        {labelText}
      </label>
    </div>
  );
}
