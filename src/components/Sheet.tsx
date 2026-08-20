interface SheetProps {
  children: React.ReactNode;
  /** Extra classes on the sheet's content wrapper (e.g. to remove the default side padding for full-bleed lists). */
  contentClassName?: string;
}

/**
 * The white "content sheet" that slides up over --bg-app with rounded top
 * corners, spanning full width, while its content stays inset by
 * --pad-screen-x.
 */
export function Sheet({ children, contentClassName }: SheetProps) {
  return (
    <div className="flex-1 rounded-t-sheet-top bg-bg-sheet pt-section">
      <div className={contentClassName ?? "px-screen-x"}>{children}</div>
    </div>
  );
}
