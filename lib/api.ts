import { Workout } from "./types";

const BASE_URL = "https://api.abcz.workers.dev/api/fitlog";

export async function getWorkouts(): Promise<Workout[]> {
  const res = await fetch(BASE_URL, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load workouts");
  return res.json();
}

export async function getWorkout(id: string | number): Promise<Workout | null> {
  const res = await fetch(`${BASE_URL}/${id}`, { cache: "no-store" });
  if (!res.ok) return null;
  const data = await res.json();
  // some workers return an array even for a single id, guard against that
  return Array.isArray(data) ? data[0] ?? null : data;
}
