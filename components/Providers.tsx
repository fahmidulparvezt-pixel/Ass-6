"use client";

import { PlanProvider } from "@/context/PlanContext";
import { ToastProvider } from "@/context/ToastContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      <PlanProvider>{children}</PlanProvider>
    </ToastProvider>
  );
}
