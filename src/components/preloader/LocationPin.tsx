export default function LocationPin({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="preloader-pin">
        <span className="preloader-pin-pulse" aria-hidden="true" />
        <svg viewBox="0 0 24 32" width={34} height={44} role="img" aria-label="Destination">
          <path
            d="M12 0C5.37 0 0 5.37 0 12c0 9 12 20 12 20s12-11 12-20c0-6.63-5.37-12-12-12z"
            fill="#C8102E"
          />
          <circle cx={12} cy={12} r={5} fill="#ffffff" />
        </svg>
      </div>
    </div>
  );
}
