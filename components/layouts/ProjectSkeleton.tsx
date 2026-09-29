export function ProjectSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl border border-white/10 bg-black p-5">
      {/* Project Image */}
      <div className="aspect-video w-full rounded-xl bg-white/5" />

      {/* Content */}
      <div className="mt-5 space-y-4">
        {/* Title */}
        <div className="h-6 w-2/3 rounded-md bg-white/10" />

        {/* Description */}
        <div className="space-y-2">
          <div className="h-4 w-full rounded bg-white/5" />
          <div className="h-4 w-4/5 rounded bg-white/5" />
        </div>

        {/* Tags */}
        <div className="flex gap-2 pt-1">
          <div className="h-6 w-16 rounded-full bg-white/10" />
          <div className="h-6 w-20 rounded-full bg-white/10" />
          <div className="h-6 w-14 rounded-full bg-white/10" />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3">
          <div className="h-4 w-24 rounded bg-white/5" />
          <div className="h-4 w-16 rounded bg-white/5" />
        </div>
      </div>
    </div>
  );
}
