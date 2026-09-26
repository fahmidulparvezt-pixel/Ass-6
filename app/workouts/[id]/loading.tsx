export default function LoadingWorkout() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex items-center gap-3 text-sm text-muted">
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-edge border-t-accent" />
        Loading workout…
      </div>
    </div>
  );
}
