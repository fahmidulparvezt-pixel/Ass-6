"use client";

import { Plus, Bookmark } from "lucide-react";
import { Workout } from "@/lib/types";
import { usePlan } from "@/context/PlanContext";
import { useToast } from "@/context/ToastContext";

export default function WorkoutActions({ workout }: { workout: Workout }) {
  const { addToPlan, saveForLater, isInPlan, isInSaved, isPlanFull } =
    usePlan();
  const { showToast } = useToast();

  const alreadyInPlan = isInPlan(workout.id);
  const alreadyInSaved = isInSaved(workout.id);
  const planDisabled = alreadyInPlan || isPlanFull;

  const handleAdd = () => {
    const added = addToPlan(workout);
    if (added) {
      showToast("Added to today's plan");
    } else if (isPlanFull) {
      showToast("Today's plan is full — remove a lift first");
    }
  };

  const handleSave = () => {
    const added = saveForLater(workout);
    showToast(added ? "Saved for later" : "Already in your saved list");
  };

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <button
        onClick={handleAdd}
        disabled={planDisabled}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accentInk transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Plus size={16} />
        {alreadyInPlan ? "Already in today's plan" : "Add to today's plan"}
      </button>
      <button
        onClick={handleSave}
        disabled={alreadyInSaved}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-edge px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Bookmark size={16} />
        {alreadyInSaved ? "Saved" : "Save for later"}
      </button>
    </div>
  );
}
