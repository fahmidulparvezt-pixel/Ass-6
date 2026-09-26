"use client";

import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Workout, SortKey } from "@/lib/types";
import { getWorkouts } from "@/lib/api";
import WorkoutCard from "./WorkoutCard";
import SortDropdown from "./SortDropdown";

export default function LibrarySection() {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [sortKey, setSortKey] = useState<SortKey>("duration");
  const [query, setQuery] = useState("");

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    getWorkouts()
      .then((data) => {
        if (!cancelled) setWorkouts(data);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const visibleWorkouts = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = q
      ? workouts.filter(
          (w) =>
            w.name.toLowerCase().includes(q) ||
            w.muscleGroups.some((tag) => tag.toLowerCase().includes(q))
        )
      : workouts;
    return [...filtered].sort((a, b) => b[sortKey] - a[sortKey]);
  }, [workouts, sortKey, query]);

  return (
    <section id="library" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-ink">
            The Library
          </h2>
          <p className="mt-2 text-sm text-muted">
            Twelve lifts covering every major muscle group.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative">
            <Search
              size={14}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or tag"
              className="w-full rounded-full border border-edge bg-surface py-1.5 pl-8 pr-3 text-sm text-ink outline-none focus:border-accent sm:w-56"
            />
          </div>
          <SortDropdown value={sortKey} onChange={setSortKey} />
        </div>
      </div>

      {loading && (
        <div className="flex items-center justify-center py-24">
          <div className="flex items-center gap-3 text-sm text-muted">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-edge border-t-accent" />
            Loading workouts…
          </div>
        </div>
      )}

      {!loading && error && (
        <p className="py-16 text-center text-sm text-muted">
          Couldn&apos;t load the library right now. Please refresh.
        </p>
      )}

      {!loading && !error && (
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visibleWorkouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      )}
    </section>
  );
}
