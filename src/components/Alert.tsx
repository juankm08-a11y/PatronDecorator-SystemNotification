import React, { ReactNode } from "react";

import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdOutlineSmsFailed } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

type AlertProps = {
  variant?: "success" | "danger" | "warning";
  children: ReactNode;
};
export default function Alert({ variant = "success", children }: AlertProps) {
  const classVariants = {
    success:
      "p-4 shadow inline-block max-w-sm bg-green-300 text-green-900 rounded-md m-2",
    warning:
      "p-4 shadow inline-block max-w-sm bg-yellow-300 text-yellow-900 rounded-md m-2",
    danger:
      "p-4 shadow inline-block max-w-sm bg-red-300 text-red-900 rounded-md m-2"
  };

  return (
    <div
      className={
        classVariants[variant] +
        " flex gap-2 items-center justify-center mx-auto"
      }
    >
      <span className="text-2xl">
        {variant === "success" ? (
          <AiOutlineCheckCircle />
        ) : variant === "warning" ? (
          <MdOutlineSmsFailed />
        ) : (
          <RxCross2 />
        )}
      </span>
      {children}
    </div>
  );
}
