import Link from "next/link";
import Image from "next/image";
import { Workout } from "@/lib/types";
import StatRow from "./StatRow";

export default function WorkoutCard({ workout }: { workout: Workout }) {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group flex flex-col overflow-hidden rounded-card border border-edge bg-surface transition-colors hover:border-accent/60"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface2">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex flex-wrap gap-1.5">
          {workout.muscleGroups.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-edge px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-display text-lg font-semibold uppercase tracking-wide text-ink">
          {workout.name}
        </h3>
        <p className="text-xs text-muted">{workout.equipment}</p>
        <div className="mt-auto pt-2">
          <StatRow
            duration={workout.duration}
            calories={workout.caloriesBurned}
            rating={workout.rating}
          />
        </div>
      </div>
    </Link>
  );
}
