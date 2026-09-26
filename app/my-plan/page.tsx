"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePlan } from "@/context/PlanContext";
import { useToast } from "@/context/ToastContext";
import PlanWorkoutCard from "@/components/PlanWorkoutCard";

type Tab = "plan" | "saved";

export default function MyPlanPage() {
  const { plan, saved, isLoaded, markDone, removeFromPlan, removeFromSaved } =
    usePlan();
  const { showToast } = useToast();
  const [tab, setTab] = useState<Tab>("plan");

  const activeList = tab === "plan" ? plan : saved;

  const metrics = useMemo(
    () => ({
      exercises: plan.length,
      minutes: plan.reduce((sum, w) => sum + w.duration, 0),
      calories: plan.reduce((sum, w) => sum + w.caloriesBurned, 0),
    }),
    [plan]
  );

  const handleMarkDone = (id: number) => {
    markDone(id);
    showToast("Nice work — marked done");
  };

  const handleRemove = (id: number, list: Tab) => {
    if (list === "plan") removeFromPlan(id);
    else removeFromSaved(id);
    showToast("Removed");
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-bold uppercase tracking-wide text-ink sm:text-4xl">
        My Plan
      </h1>
      <p className="mt-2 text-sm text-muted">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
        {[
          { label: "Exercises", value: metrics.exercises },
          { label: "Minutes", value: metrics.minutes },
          { label: "Calories", value: metrics.calories },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-card border border-edge bg-surface px-4 py-5 text-center"
          >
            <p className="font-display text-2xl font-bold text-accent sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1 text-xs uppercase tracking-wide text-muted">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex gap-2 border-b border-edge">
        {(
          [
            { key: "plan" as const, label: `Today's Plan (${plan.length})` },
            { key: "saved" as const, label: `Saved (${saved.length})` },
          ]
        ).map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`-mb-px border-b-2 px-4 py-3 text-sm font-semibold transition-colors ${
              tab === t.key
                ? "border-accent text-ink"
                : "border-transparent text-muted hover:text-ink"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {!isLoaded && (
          <div className="flex items-center justify-center py-20">
            <div className="flex items-center gap-3 text-sm text-muted">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-edge border-t-accent" />
              Loading workouts…
            </div>
          </div>
        )}

        {isLoaded && activeList.length === 0 && (
          <div className="flex flex-col items-center rounded-card border border-dashed border-edge px-6 py-20 text-center">
            <p className="font-display text-xl font-semibold uppercase tracking-wide text-ink">
              Nothing here yet
            </p>
            <p className="mt-2 max-w-xs text-sm text-muted">
              Browse the library and add a lift to get today moving.
            </p>
            <Link
              href="/"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accentInk"
            >
              Go to workouts
            </Link>
          </div>
        )}

        {isLoaded && activeList.length > 0 && (
          <div className="flex flex-col gap-3">
            {activeList.map((item) => (
              <PlanWorkoutCard
                key={item.id}
                item={item}
                showMarkDone={tab === "plan"}
                onMarkDone={() => handleMarkDone(item.id)}
                onRemove={() => handleRemove(item.id, tab)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
