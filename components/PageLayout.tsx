"use client";

import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return <main>{children}</main>;
}
