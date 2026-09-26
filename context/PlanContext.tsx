"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { PlanItem, Workout } from "@/lib/types";

const PLAN_KEY = "fitlog:plan";
const SAVED_KEY = "fitlog:saved";
export const PLAN_CAP = 5;

interface PlanContextValue {
  plan: PlanItem[];
  saved: PlanItem[];
  isLoaded: boolean;
  isPlanFull: boolean;
  isInPlan: (id: number) => boolean;
  isInSaved: (id: number) => boolean;
  addToPlan: (workout: Workout) => boolean;
  saveForLater: (workout: Workout) => boolean;
  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
  markDone: (id: number) => void;
}

const PlanContext = createContext<PlanContextValue | null>(null);

function readStorage(key: string): PlanItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function PlanProvider({ children }: { children: React.ReactNode }) {
  const [plan, setPlan] = useState<PlanItem[]>([]);
  const [saved, setSaved] = useState<PlanItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setPlan(readStorage(PLAN_KEY));
    setSaved(readStorage(SAVED_KEY));
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) window.localStorage.setItem(PLAN_KEY, JSON.stringify(plan));
  }, [plan, isLoaded]);

  useEffect(() => {
    if (isLoaded) window.localStorage.setItem(SAVED_KEY, JSON.stringify(saved));
  }, [saved, isLoaded]);

  const isInPlan = (id: number) => plan.some((w) => w.id === id);
  const isInSaved = (id: number) => saved.some((w) => w.id === id);

  const addToPlan = (workout: Workout) => {
    if (isInPlan(workout.id) || plan.length >= PLAN_CAP) return false;
    setPlan((prev) => [...prev, { ...workout, done: false }]);
    return true;
  };

  const saveForLater = (workout: Workout) => {
    if (isInSaved(workout.id)) return false;
    setSaved((prev) => [...prev, { ...workout, done: false }]);
    return true;
  };

  const removeFromPlan = (id: number) =>
    setPlan((prev) => prev.filter((w) => w.id !== id));

  const removeFromSaved = (id: number) =>
    setSaved((prev) => prev.filter((w) => w.id !== id));

  const markDone = (id: number) =>
    setPlan((prev) =>
      prev.map((w) => (w.id === id ? { ...w, done: !w.done } : w))
    );

  return (
    <PlanContext.Provider
      value={{
        plan,
        saved,
        isLoaded,
        isPlanFull: plan.length >= PLAN_CAP,
        isInPlan,
        isInSaved,
        addToPlan,
        saveForLater,
        removeFromPlan,
        removeFromSaved,
        markDone,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

export function usePlan() {
  const ctx = useContext(PlanContext);
  if (!ctx) throw new Error("usePlan must be used within PlanProvider");
  return ctx;
}
