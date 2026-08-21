interface EmptyStateProps {
  icon: React.ReactNode;
  message: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({ icon, message, actionLabel, onAction }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-[12px] px-outer py-[48px] text-center">
      <span className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-navy-06 text-episcopal-navy">{icon}</span>
      <p className="max-w-[240px] font-sans text-[14px] text-muted-ink">{message}</p>
      {actionLabel && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="press mt-[4px] rounded-pill bg-episcopal-navy px-[18px] py-[9px] font-sans text-[13px] font-semibold text-white"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}

export function InlineErrorCard({
  title = "Something went wrong",
  message,
  onRetry,
}: {
  title?: string;
  message: string;
  onRetry?: () => void;
}) {
  return (
    <div className="mx-outer rounded-card border border-red-12 bg-red-08 px-[16px] py-[14px]">
      <p className="font-sans text-[14px] font-semibold text-romanian-red">{title}</p>
      <p className="mt-[4px] font-sans text-[13px] text-ink-black/70">{message}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="press mt-[10px] rounded-pill bg-romanian-red px-[14px] py-[7px] font-sans text-[12px] font-semibold text-white"
        >
          Retry
        </button>
      )}
    </div>
  );
}

export function LoadingMark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} anim-spin-slow text-episcopal-navy`} fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" strokeOpacity="0.2" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function Skeleton({ className }: { className: string }) {
  return <div className={`skeleton anim-pulse-subtle ${className}`} />;
}
