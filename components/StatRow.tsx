import { Clock, Flame, Star } from "lucide-react";

export default function StatRow({
  duration,
  calories,
  rating,
}: {
  duration: number;
  calories: number;
  rating: number;
}) {
  return (
    <div className="flex items-center gap-4 text-xs text-muted">
      <span className="flex items-center gap-1">
        <Clock size={14} className="text-accent" /> {duration} min
      </span>
      <span className="flex items-center gap-1">
        <Flame size={14} className="text-accent" /> {calories} kcal
      </span>
      <span className="flex items-center gap-1">
        <Star size={14} className="text-accent" /> {rating}
      </span>
    </div>
  );
}
