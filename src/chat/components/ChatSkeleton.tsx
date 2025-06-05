export const ChatSkeleton = () => {
  return (
    <div className="flex-1 flex flex-col p-4 space-y-4">
      {/* Agent message skeleton */}
      <div className="flex gap-2 max-w-[80%]">
        <div className="h-8 w-8 rounded-full bg-muted animate-pulse" />
        <div className="space-y-2 flex-1">
          <div className="flex items-center gap-2">
            <div className="h-4 w-20 bg-muted rounded animate-pulse" />
            <div className="h-4 w-32 bg-muted rounded animate-pulse" />
          </div>
          <div className="p-3 bg-muted/50 rounded-lg">
            <div className="h-4 w-full bg-muted rounded animate-pulse" />
            <div className="h-4 w-3/4 bg-muted rounded animate-pulse mt-2" />
          </div>
        </div>
      </div>

      {/* User message skeleton */}
      <div className="flex flex-col items-end">
        <div className="text-right mb-1">
          <div className="h-4 w-24 bg-muted rounded animate-pulse ml-auto" />
        </div>
        <div className="bg-muted p-3 rounded-lg max-w-[80%] w-64">
          <div className="h-4 w-full bg-muted-foreground/20 rounded animate-pulse" />
          <div className="h-4 w-2/3 bg-muted-foreground/20 rounded animate-pulse mt-2" />
        </div>
      </div>

      {/* Repeat a few more skeletons */}
      <div className="flex gap-2 max-w-[80%]">
        <div className="h-8 w-8 rounded-full bg-muted animate-pulse" />
        <div className="space-y-2 flex-1">
          <div className="flex items-center gap-2">
            <div className="h-4 w-20 bg-muted rounded animate-pulse" />
            <div className="h-4 w-32 bg-muted rounded animate-pulse" />
          </div>
          <div className="p-3 bg-muted/50 rounded-lg">
            <div className="h-4 w-full bg-muted rounded animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};
