import React, { ReactNode } from "react";
import "@/globals.css";

export default function Layout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
