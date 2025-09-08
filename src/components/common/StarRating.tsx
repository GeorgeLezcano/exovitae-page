export function StarRating({
  value,
  onChange,
  error,
  ariaDescribedBy,
}: {
  value: number | "";
  onChange: (val: number) => void;
  error?: string;
  ariaDescribedBy?: string;
}) {
  const current = typeof value === "number" ? value : 0;

  const setByKey = (dir: "left" | "right" | "home" | "end") => {
    const v = current;
    if (dir === "left") onChange(Math.max(1, v - 1 || 1));
    if (dir === "right") onChange(Math.min(5, (v || 0) + 1));
    if (dir === "home") onChange(1);
    if (dir === "end") onChange(5);
  };

  return (
    <div
      className="field"
      style={{ marginBottom: 0, paddingBottom: 0, width: "auto" }}
    >
      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "flex-start",
          minWidth: "160px",
        }}
      >
        <div
          role="radiogroup"
          aria-label="Rating"
          aria-describedby={ariaDescribedBy}
          className="starsRow"
        >
          {[1, 2, 3, 4, 5].map((n) => {
            const filled = n <= current;
            const selected = current === n;
            return (
              <button
                key={n}
                type="button"
                role="radio"
                aria-checked={selected}
                onClick={() => onChange(n)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowLeft") {
                    e.preventDefault();
                    setByKey("left");
                  } else if (e.key === "ArrowRight") {
                    e.preventDefault();
                    setByKey("right");
                  } else if (e.key === "Home") {
                    e.preventDefault();
                    setByKey("home");
                  } else if (e.key === "End") {
                    e.preventDefault();
                    setByKey("end");
                  } else if (e.key === " " || e.key === "Enter") {
                    e.preventDefault();
                    onChange(n);
                  }
                }}
                title={`${n} star${n > 1 ? "s" : ""}`}
                className={`starButton ${filled ? "isFilled" : ""}`}
              >
                {filled ? "★" : "☆"}
              </button>
            );
          })}
        </div>
        <span
          id={ariaDescribedBy}
          className="errorFloat"
          style={{
            alignSelf: "stretch",
            visibility: error ? "visible" : "hidden",
          }}
        >
          {error || "\u00A0"}
        </span>
      </div>
    </div>
  );
}
