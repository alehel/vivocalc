import React from "react";

export default function InfoContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-white md:shadow-md rounded p-8">{children}</div>;
}
