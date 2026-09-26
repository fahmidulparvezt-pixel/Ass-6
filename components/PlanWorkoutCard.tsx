"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, X } from "lucide-react";
import { PlanItem } from "@/lib/types";
import StatRow from "./StatRow";

export default function PlanWorkoutCard({
  item,
  showMarkDone,
  onMarkDone,
  onRemove,
}: {
  item: PlanItem;
  showMarkDone: boolean;
  onMarkDone?: () => void;
  onRemove: () => void;
}) {
  return (
    <div
      className={`flex flex-col gap-4 rounded-card border border-edge bg-surface p-4 sm:flex-row sm:items-center ${
        item.done ? "opacity-60" : ""
      }`}
    >
      <div className="relative h-20 w-full shrink-0 overflow-hidden rounded-card bg-surface2 sm:h-16 sm:w-16">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </div>

      <div className="flex-1">
        <h3 className="font-display text-base font-semibold uppercase tracking-wide text-ink">
          {item.name}
        </h3>
        <p className="text-xs text-muted">{item.equipment}</p>
        <div className="mt-1.5">
          <StatRow
            duration={item.duration}
            calories={item.caloriesBurned}
            rating={item.rating}
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Link
          href={`/workouts/${item.id}`}
          className="rounded-full border border-edge px-3 py-1.5 text-xs font-semibold text-ink hover:border-accent"
        >
          View Details
        </Link>
        {showMarkDone && (
          <button
            onClick={onMarkDone}
            title="Mark as done"
            className={`flex h-8 w-8 items-center justify-center rounded-full border ${
              item.done
                ? "border-accent text-accent"
                : "border-edge text-muted hover:text-ink"
            }`}
          >
            <CheckCircle2 size={16} />
          </button>
        )}
        <button
          onClick={onRemove}
          title="Remove" 
          aria-label="Remove workout" 
          className="flex h-8 w-8 items-center justify-center rounded-full border border-edge text-muted hover:border-red-500 hover:text-red-500"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
