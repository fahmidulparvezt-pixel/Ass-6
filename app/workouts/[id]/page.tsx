import Image from "next/image";
import { notFound } from "next/navigation";
import { getWorkout } from "@/lib/api";
import WorkoutActions from "@/components/WorkoutActions";

const SPECS = [
  { label: "Equipment", key: "equipment" as const },
  { label: "Difficulty", key: "difficulty" as const },
  { label: "Sets", key: "sets" as const },
  { label: "Reps", key: "reps" as const },
  { label: "Duration", key: "duration" as const, suffix: " min" },
  { label: "Calories", key: "caloriesBurned" as const, suffix: " kcal" },
  { label: "Rating", key: "rating" as const },
];

export default async function WorkoutDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const workout = await getWorkout(params.id);
  if (!workout) notFound();

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="relative aspect-square w-full overflow-hidden rounded-card border border-edge bg-surface lg:sticky lg:top-24">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            priority
            className="object-cover"
          />
        </div>

        <div>
          <div className="flex flex-wrap gap-1.5">
            {workout.muscleGroups.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-edge px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="mt-4 font-display text-3xl font-bold uppercase tracking-wide text-ink sm:text-4xl">
            {workout.name}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {workout.description}
          </p>

          <dl className="mt-6 divide-y divide-edge rounded-card border border-edge bg-surface">
            {SPECS.map((spec) => (
              <div
                key={spec.label}
                className="flex items-center justify-between px-4 py-3 text-sm"
              >
                <dt className="uppercase tracking-wide text-muted">
                  {spec.label}
                </dt>
                <dd className="font-semibold text-ink">
                  {workout[spec.key]}
                  {spec.suffix ?? ""}
                </dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-8 font-display text-lg font-semibold uppercase tracking-wide text-ink">
            Instructions
          </h2>
          <ol className="mt-3 space-y-3">
            {workout.instructions.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm text-muted">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface2 text-xs font-semibold text-accent">
                  {i + 1}
                </span>
                <span className="pt-0.5">{step}</span>
              </li>
            ))}
          </ol>

          <div className="mt-8">
            <WorkoutActions workout={workout} />
          </div>
        </div>
      </div>
    </div>
  );
}
