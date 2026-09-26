"use client";

import { ChevronDown } from "lucide-react";
import { SortKey } from "@/lib/types";

const OPTIONS: { key: SortKey; label: string }[] = [
  { key: "duration", label: "Duration" },
  { key: "caloriesBurned", label: "Calories" },
  { key: "rating", label: "Rating" },
];

export default function SortDropdown({
  value,
  onChange,
}: {
  value: SortKey;
  onChange: (key: SortKey) => void;
}) {
  return (
    <label className="relative inline-flex items-center gap-2 text-sm text-muted">
      Sort By
      <span className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value as SortKey)}
          className="appearance-none rounded-full border border-edge bg-surface py-1.5 pl-3 pr-8 text-sm font-medium text-ink outline-none focus:border-accent"
        >
          {OPTIONS.map((opt) => (
            <option key={opt.key} value={opt.key}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown
          size={14}
          className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-muted"
        />
      </span>
    </label>
  );
}
