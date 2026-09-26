import Image from "next/image";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="border-b border-edge">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Workout Library
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-[1.05] tracking-wide text-ink sm:text-5xl lg:text-6xl">
            Train with intent.
            <br />
            Log every set.
          </h1>
          <p className="mt-5 max-w-md text-base text-muted">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <a
            href="#library"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accentInk transition-transform hover:-translate-y-0.5"
          >
            Browse Workouts
            <ArrowDownRight size={16} />
          </a>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-card border border-edge bg-surface lg:aspect-square">
          <Image
            src="/banner.png"
            alt="Athlete training"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
