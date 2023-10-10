import React from "react";

export default function InfoContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white md:shadow-md rounded px-8 pt-6 pb-8">
      {children}
    </div>
  );
}
